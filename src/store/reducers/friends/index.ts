import * as constants from '../../constants/friends';
import { FriendsAction } from '../../actions/friends/types';
import { IFriendsState } from './types';
import {IState} from "../../types/state";

const initialState: IFriendsState = [
  {
    id: 0,
    first_name: 'Test',
    last_name: 'Test',
    photo_100: '...',
    track_code: '...',
    nickname: '...'
  },
  {
    id: 1,
    first_name: 'Test 2',
    last_name: 'Test 2',
    photo_100: '...',
    track_code: '...',
    nickname: '...'
  }
];

/**
 * The friends reducer.
 *
 * @param state
 * @param action
 */
export function friendsReducer(state = initialState, action: FriendsAction) {
  switch (action.type) {
    case constants.SET_FRIENDS: {
      return action.payload.friends;
    }

    default: return state;
  }
}

/**
 * The function return friends state.
 *
 * @param state
 */
export const getFriendsState = (state: IState) => state.friends;