import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import { ContentFix, Dashboard, AddButton } from '../../components';
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
      <PanelHeader>Все займы</PanelHeader>
      <AddButton onModalShow={props.onShowModal} />
      <ContentFix>
        <Dashboard />
      </ContentFix>
    </Panel>
  );
}