import IFriend from "../../store/types/friend";
import {IAddDebtValues} from "../../modals/AddDebt";
import { Moment } from 'moment';

export interface IDebtCardProps {
  first_name: IFriend['first_name'];
  last_name: IFriend['last_name'];
  photo_100: IFriend['photo_100'];
  sum: IAddDebtValues['sum'];
  createdAt: Moment;
  expirationDate: IAddDebtValues['expirationDate'];
}