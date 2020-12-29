import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import { PanelProps } from '@vkontakte/vkui/dist/components/Panel/Panel';
import { Informer, Contacts, Dashboard } from '../../components';

/**
 * The app panel.
 *
 * @param props
 * @constructor
 */
export default function AppPanel(props: PanelProps): React.ReactElement {
  return (
    <Panel id={props.id}>
      <PanelHeader>Долги</PanelHeader>
      <Informer />
      <Dashboard />
      <Contacts />
    </Panel>
  );
}