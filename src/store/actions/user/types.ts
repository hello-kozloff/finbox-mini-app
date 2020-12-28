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
 * The fetch access token action interface.
 */
export interface IFetchAccessTokenAction {
  type: typeof constants.FETCH_ACCESS_TOKEN;
}

/**
 * User user action type.
 */
export type UserAction = ISetUserAction | IFetchAccessTokenAction;