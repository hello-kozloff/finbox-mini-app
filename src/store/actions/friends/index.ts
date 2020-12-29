import * as constants from '../../constants/friends';
import { ISetFriendsAction, FriendsAction } from './types';

/**
 * The fetch friends action.
 */
export function fetchFriends(): FriendsAction {
  return {
    type: constants.FETCH_FRIENDS
  };
}

/**
 * The set friends action.
 */
export function setFriends(payload: ISetFriendsAction['payload']): FriendsAction {
  return {
    type: constants.SET_FRIENDS,
    payload
  };
}