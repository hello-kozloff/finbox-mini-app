import { Moment } from 'moment';
import { IFriendsState } from '../../store/reducers/friends/types';
import { SelectOption } from "@vkontakte/vkui/dist/components/CustomSelect/CustomSelect";
import IFriend from '../../store/types/friend';
import IModalProps from '../../types/modalProps';

/**
 * The debt types.
 */
export enum DebtType {
  'borrowed' = 'borrowed',
  'lent' = 'lent'
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

/**
 * The friend option.
 */
export type IFriendOption = SelectOption;

/**
 * The add debt modal props interface.
 */
export default interface IAddDebtModalProps extends IModalProps {
  friends: IFriendsState;
}