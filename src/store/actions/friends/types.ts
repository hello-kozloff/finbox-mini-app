import * as constants from '../../constants/friends';
import IFriend from "../../types/friend";

/**
 * The fetch friends action interface.
 */
export interface IFetchFriendsAction {
  type: typeof constants.FETCH_FRIENDS;
}

/**
 * The fetch set friends action interface.
 */
export interface ISetFriendsAction {
  type: typeof constants.SET_FRIENDS;
  payload: {
    friends: IFriend[];
  };
}

/**
 * Friends action type.
 */
export type FriendsAction = IFetchFriendsAction | ISetFriendsAction;