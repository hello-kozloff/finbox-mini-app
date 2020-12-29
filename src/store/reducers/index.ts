import { combineReducers } from 'redux';
import { IState } from '../types/state';

/**
 * Reducer's.
 */
import { userReducer } from './user';
import { friendsReducer } from "./friends";

/**
 * The root reducer.
 */
export default combineReducers<IState>({
  user: userReducer,
  friends: friendsReducer
})