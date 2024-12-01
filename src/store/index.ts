import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import commentReducer from './commentReducer';
import postReducer from './postReducer';

export const store = createStore(
  combineReducers({
    postReducer,
    commentReducer,
  }),
  applyMiddleware(thunk)
);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppAction = ReturnType<typeof store.dispatch>;
export type AppDispatch = ThunkDispatch<RootState, void, AppAction>;
