import IFriend from '../../store/types/friend';
import { Moment } from 'moment';

/**
 * The debt types.
 */
export enum DebtType {
  'borrowed',
  'lent'
}

/**
 * The add debt form values.
 */
export interface IAddDebtValues {
  type: DebtType;
  sum: number | undefined;
  friendId: IFriend['id'] | undefined;
  expirationDate?: Moment | undefined;
}