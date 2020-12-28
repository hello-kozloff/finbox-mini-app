import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import { PanelProps } from '@vkontakte/vkui/dist/components/Panel/Panel';

/**
 * The app panel.
 *
 * @param props
 * @constructor
 */
export default function AppPanel(props: PanelProps): React.ReactElement {
  return (
    <Panel id={props.id}>
      <PanelHeader>App</PanelHeader>
    </Panel>
  );
}