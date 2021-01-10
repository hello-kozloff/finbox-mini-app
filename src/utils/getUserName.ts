import IFriend from "../store/types/friend";

/**
 * The get user name util.
 *
 * @param first_name
 * @param last_name
 */
export default function getUserName(first_name: IFriend['first_name'], last_name: IFriend['last_name']): string {
  return `${first_name} ${last_name}`;
}