import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from 'components/comments';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { getSelectedPost } from 'selectors/postSelectors';
import { getComments } from 'store/asyncActions';

const CommentsPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const selectedPost = useAppSelector(getSelectedPost);

  useEffect(() => {
    const postId = Number(params?.postid);

    dispatch(getComments(selectedPost || postId));
  }, []);
  return <Comments />;
};

export default CommentsPage;
