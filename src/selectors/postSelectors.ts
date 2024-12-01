import { RootState } from 'store';

export const getPostReducer = (state: RootState) => state.postReducer;

export const getSelectedPost = (state: RootState) =>
  getPostReducer(state).selectedPost;

export const getPosts = (state: RootState) => getPostReducer(state).posts;
