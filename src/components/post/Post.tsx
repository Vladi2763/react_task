import { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import { TPostInfo } from 'types';
import { PostActions } from 'enum/actions';
import { Operations } from 'enum/operations';
import Card from 'components/card';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useModal } from 'hooks/useModal';
import { deletePost, editPost } from 'store/asyncActions';

interface IPostProps {
  body: string;
  title: string;
  id: number;
}

const Post: React.FC<IPostProps> = ({ body, title, id }) => {
  const ref = useRef<string>('');
  const dispatch = useAppDispatch();
  const initialTextValue = useMemo(() => {
    return {
      body,
      title,
    };
  }, [body, title]);

  const openModalHandler = (text: string) => (): void => {
    setIsOpen(true);
    ref.current = text;
  };

  const deletePostHandler = (): void => {
    dispatch(deletePost(id));
  };

  const editPostHandler = (post: TPostInfo): void => {
    dispatch(editPost(post, id));
  };

  const submitHandler = (postInfo: TPostInfo): void => {
    ref.current === Operations.EDIT
      ? editPostHandler(postInfo)
      : deletePostHandler();
    setIsOpen(false);
  };

  const selectPostHandler = (): void => {
    dispatch({
      type: PostActions.SELECT_POST,
      payload: id,
    });
  };

  const { setIsOpen, Dialog } = useModal({
    text: ref.current,
    submitHandler,
    initialTextValue,
  });

  return (
    <>
      <Card title={title} body={body}>
        <Link to={`posts/${id}/comments`}>
          <Button onClick={selectPostHandler}>
            <CommentIcon />
          </Button>
        </Link>
        <Button
          onClick={openModalHandler(Operations.EDIT)}
          sx={{ marginRight: 2, marginLeft: 2 }}
          variant="outlined"
        >
          <CreateOutlinedIcon />
        </Button>
        <Button
          onClick={openModalHandler(Operations.DELETE)}
          variant="outlined"
        >
          <DeleteIcon htmlColor="#f95d78" />
        </Button>
      </Card>
      <Dialog />
    </>
  );
};

export default Post;
