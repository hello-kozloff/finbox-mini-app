import {IFriendsState} from "../../store/reducers/friends/types";

export enum SortType {
  ByMaximumSum,
  ByExpirationDate
}

export default interface IDebtControllerProps {
  friends: IFriendsState;
}