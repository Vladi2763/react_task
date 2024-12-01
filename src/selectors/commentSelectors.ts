import { RootState } from 'store';

export const getCommentReducer = (state: RootState) => state.commentReducer;

export const getComments = (state: RootState) =>
  getCommentReducer(state).comments;
