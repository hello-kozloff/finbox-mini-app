import { SelectOption } from "@vkontakte/vkui/dist/components/CustomSelect/CustomSelect";
import { DateFormat } from "@vkontakte/vkui/dist/components/DatePicker/DatePicker";
import { IFriendsState } from '../../store/reducers/friends/types';
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
  type: DebtType | null;
  sum: number | null;
  friendId: IFriend['id'] | null;
  expirationDate: DateFormat | null;
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