import { useEffect } from 'react';
import Posts from 'components/posts';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { fetchAllPosts } from 'store/asyncActions';

const PostsPages = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return <Posts />;
};

export default PostsPages;
