import { IUserState } from '../reducers/user/types';
import { IFriendsState } from "../reducers/friends/types";

/**
 * The state interface.
 */
export interface IState {
  user: IUserState;
  friends: IFriendsState;
}