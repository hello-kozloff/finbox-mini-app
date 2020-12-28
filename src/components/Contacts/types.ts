import { IUser } from "../../store/types/user";

/**
 * The contacts props interface.
 */
export interface IContactsProps {
  access_token: IUser['access_token'];
}

/**
 * The friend interface.
 */
export interface IFriend {
  id: number;
  first_name: string;
  last_name: string;
  nickname: string;
  photo_100: string;
  track_code: string;
}