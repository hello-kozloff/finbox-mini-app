import * as constants from '../../constants/user';
import { IUser } from '../../types/user';

/**
 * The set user action interface.
 */
export interface ISetUserAction {
  type: typeof constants.SET_USER;
  payload: {
    user: IUser;
  };
}

/**
 * User user action type.
 */
export type UserAction = ISetUserAction;