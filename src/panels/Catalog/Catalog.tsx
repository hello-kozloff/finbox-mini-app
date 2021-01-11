import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import IPanelProps from "../../types/panelProps";
import {CatalogItem, ContentFix} from "../../components";

/**
 * The catalog panel.
 *
 * @param props
 * @constructor
 */
export default function CatalogPanel(props: IPanelProps): React.ReactElement {
  return (
    <Panel id={props.id}>
      <PanelHeader fixed={false}>Каталог</PanelHeader>
      <ContentFix>
        <CatalogItem href="https://www.kredito24.ru/" avatarSrc="https://www.orelbanks.ru/bimage/kredito24-logo.jpg" title="kredito24" value="До 100 руб" />
      </ContentFix>
    </Panel>
  );
}