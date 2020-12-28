import * as constants from '../../constants/user';
import { UserAction } from '../../actions/user/types';
import { IUserState } from './types';

const initialState: IUserState = {
  access_token: ''
};

/**
 * The user reducer.
 *
 * @param state
 * @param action
 */
export function userReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case constants.SET_USER: {
      return action.payload.user;
    }

    default: return state;
  }
}