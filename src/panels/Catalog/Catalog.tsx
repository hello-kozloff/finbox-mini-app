import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import IPanelProps from "../../types/panelProps";

/**
 * The catalog panel.
 *
 * @param props
 * @constructor
 */
export default function CatalogPanel(props: IPanelProps): React.ReactElement {
  return (
    <Panel id={props.id}>
      <PanelHeader>Каталог</PanelHeader>
    </Panel>
  );
}