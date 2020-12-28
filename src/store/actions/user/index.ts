import * as constants from '../../constants/user';
import { ISetUserAction, UserAction } from './types';

/**
 * The set user action.
 *
 * @param payload
 */
export function setUser(payload: ISetUserAction['payload']): UserAction {
  return {
    type: constants.SET_USER,
    payload
  };
}