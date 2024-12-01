import { TPostInfo } from 'types';
import Post from 'components/post';
import Wrapper from 'components/wrapper';
import { Operations } from 'enum/operations';
import { Pages } from 'enum/pages';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useModal } from 'hooks/useModal';
import { createPost } from 'store/asyncActions';
import { getPosts } from 'selectors/postSelectors';

const Posts = () => {
  const posts = useAppSelector(getPosts);
  const dispatch = useAppDispatch();

  const openModalHandler = (): void => setIsOpen(true);

  const submitHandler = (postInfo: TPostInfo): void => {
    dispatch(createPost(postInfo));
    setIsOpen(false);
  };

  const { setIsOpen, Dialog } = useModal({
    text: Operations.CREATE,
    submitHandler,
  });

  return (
    <>
      <Wrapper pageName={Pages.POSTS} onOpenModalHandler={openModalHandler}>
        {posts?.map(({ body, id, title }) => (
          <Post key={id} body={body} title={title} id={id} />
        ))}
      </Wrapper>
      <Dialog />
    </>
  );
};

export default Posts;
