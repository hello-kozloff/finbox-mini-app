import React from 'react';
import { AppPanel } from "../../panels";
import { ViewProps } from "@vkontakte/vkui/dist/components/View/View";
import { PanelProps } from "@vkontakte/vkui/dist/components/Panel/Panel";
import IModal from "../../types/modal";
import {connect} from "react-redux";
import {IState} from "../../store/types/state";
import {getFriendsState} from "../../store/reducers/friends";
import {IFriendsState} from "../../store/reducers/friends/types";
import { View, ModalRoot } from '@vkontakte/vkui';
import { AddDebtModal } from '../../modals';
import { AppModal } from './types';

/**
 * The app view.
 *
 * @constructor
 */
function AppView(props: ViewProps & PanelProps & { friends: IFriendsState }): React.ReactElement {
  const [activeModal, setActiveModal] = React.useState<IModal | null>(null);

  /**
   * The function show modal.
   * @param modalName
   */
  function onShowModal(modalName: string): void {
    return setActiveModal(modalName);
  }

  /**
   * The function cancel modal.
   */
  function onCancelModal(): void {
    return setActiveModal(null);
  }

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={onCancelModal}>
      <AddDebtModal id={AppModal.AddDebt} onCancelModal={onCancelModal} dynamicContentHeight />
    </ModalRoot>
  );

  return (
    <View id={props.id} modal={modal} activePanel={props.activePanel}>
      <AppPanel id={props.id} onShowModal={onShowModal} />
    </View>
  );
}

const mapStateToProps = (state: IState) => ({
  friends: getFriendsState(state)
});

export default connect(mapStateToProps)(AppView);