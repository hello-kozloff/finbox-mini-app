import {IFriendsState} from "../../store/reducers/friends/types";
import {ViewProps} from "@vkontakte/vkui/dist/components/View/View";

export enum SortType {
  ByMaximumSum,
  ByExpirationDate
}

export default interface IDebtControllerProps {
  friends: IFriendsState;
  onShowPopout?: (popout: ViewProps['popout']) => void;
}