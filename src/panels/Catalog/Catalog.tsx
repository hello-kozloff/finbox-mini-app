import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import { PanelProps } from '@vkontakte/vkui/dist/components/Panel/Panel';

/**
 * The catalog panel.
 *
 * @param props
 * @constructor
 */
export default function CatalogPanel(props: PanelProps): React.ReactElement {
  return (
    <Panel id={props.id}>
      <PanelHeader>Каталог</PanelHeader>
    </Panel>
  );
}