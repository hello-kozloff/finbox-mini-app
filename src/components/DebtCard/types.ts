import IFriend from "../../store/types/friend";
import {IAddDebtValues} from "../../modals/AddDebt";

export interface IDebtCardProps {
  first_name: IFriend['first_name'];
  last_name: IFriend['last_name'];
  photo_100: IFriend['photo_100'];
  sum: IAddDebtValues['sum'];
  createdAt: string;
  expirationDate: string | null;
}