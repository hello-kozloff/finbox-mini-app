import IFriend from "../../store/types/friend";

export interface IDebtCardProps {
  first_name: IFriend['first_name'];
  last_name: IFriend['last_name'];
  photo_100: IFriend['photo_100'];
  summary: string;
  createdAt: string;
  returnDate: string;
}