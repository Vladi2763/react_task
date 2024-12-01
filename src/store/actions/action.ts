import { CommentActions } from 'enum/actions';

export const clearComments = () => {
  return {
    type: CommentActions.CLEAR_COMMENTS,
  };
};
