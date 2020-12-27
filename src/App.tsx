import React from 'react';
import { AppRoot, View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';

/**
 * The app component.
 *
 * @constructor
 */
export default function App(): React.ReactElement {
  return (
    <AppRoot>
      <View activePanel="main">
        <Panel id="main">
          <PanelHeader>VKUI</PanelHeader>
          <Group header={<Header mode="secondary">Items</Header>}>
            <Cell>Hello</Cell>
            <Cell>World</Cell>
          </Group>
        </Panel>
      </View>
    </AppRoot>
  );
}