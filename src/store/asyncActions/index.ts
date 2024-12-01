import { TPostInfo } from 'types';
import { getPostComments } from 'api/commentApi';
import {
  createPostApi,
  getAllPosts,
  deletePostApi,
  editPostApi,
} from 'api/postApi';
import { PostActions, CommentActions } from 'enum/actions';
import { clearComments } from 'store/actions';
import { AppDispatch } from '../index';

export const fetchAllPosts =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const payload = await getAllPosts();

      dispatch({
        type: PostActions.SET_POSTS,
        payload,
      });

      dispatch(clearComments());
    } catch (e) {
      console.log(e);
    }
  };

export const createPost =
  (postInfo: TPostInfo) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const post = await createPostApi(postInfo);

      dispatch({
        type: PostActions.CREATE_POST,
        payload: post,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const deletePost =
  (id: number) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      await deletePostApi(id);

      dispatch({
        type: PostActions.DELETE_POST,
        payload: id,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const editPost =
  (postInfo: TPostInfo, id: number) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const post = await editPostApi(postInfo, id);

      dispatch({
        type: PostActions.EDIT_POST,
        payload: post,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getComments =
  (id: number) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const comments = await getPostComments(id);

      dispatch({
        type: CommentActions.SET_COMMENTS,
        payload: comments,
      });
    } catch (e) {
      console.log(e);
    }
  };
