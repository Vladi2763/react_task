import { AnyAction } from 'redux';
import { TPosts } from 'types';
import { PostActions as Actions } from 'enum/actions';

export interface IInitialState {
  posts: TPosts;
  selectedPost: number | undefined;
}

const initialState: IInitialState = {
  posts: [],
  selectedPost: undefined,
};

const postReducer = (
  state = initialState,
  action: AnyAction
): IInitialState => {
  switch (action.type) {
    case Actions.SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case Actions.SELECT_POST: {
      return {
        ...state,
        selectedPost: action.payload,
      };
    }
    case Actions.CREATE_POST: {
      const newPost = action.payload;
      const posts = [...state.posts];

      posts.unshift(newPost);

      return {
        ...state,
        posts,
      };
    }
    case Actions.EDIT_POST: {
      const posts = [...state.posts];
      const updatedPost = action.payload;

      const postIndexToUpdated = posts.findIndex(
        (post) => post.id === updatedPost.id
      );

      if (postIndexToUpdated !== -1) {
        posts.splice(postIndexToUpdated, 1, updatedPost);
      }

      return {
        ...state,
        posts,
      };
    }
    case Actions.DELETE_POST: {
      const posts = [...state.posts];
      const id = action.payload;

      const deletedPostIndex = posts.findIndex((post) => post.id === id);

      if (deletedPostIndex !== -1) {
        posts.splice(deletedPostIndex, 1);
      }

      return {
        ...state,
        posts,
      };
    }
    default:
      return state;
  }
};

export default postReducer;
