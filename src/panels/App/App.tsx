import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import { Informer, Contacts, Dashboard } from '../../components';
import IPanelProps from "../../types/panelProps";

/**
 * The app panel.
 *
 * @param props
 * @constructor
 */
export default function AppPanel(props: IPanelProps): React.ReactElement {
  return (
    <Panel id={props.id}>
      <PanelHeader>Долги</PanelHeader>
      <Informer onModalShow={props.onShowModal} />
      <Dashboard />
      <Contacts />
    </Panel>
  );
}