import { AnyAction } from 'redux';
import { TComments } from 'types';
import { CommentActions as Actions } from 'enum/actions';

interface IInitialState {
  comments: TComments;
}

const initialState: IInitialState = {
  comments: [],
};

const commentReducer = (
  state = initialState,
  action: AnyAction
): IInitialState => {
  switch (action.type) {
    case Actions.SET_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    case Actions.CLEAR_COMMENTS: {
      return {
        ...state,
        comments: [],
      };
    }
    default:
      return state;
  }
};

export default commentReducer;
