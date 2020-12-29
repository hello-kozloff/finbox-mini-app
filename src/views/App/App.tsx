import React from 'react';
import { View } from '@vkontakte/vkui';
import { AppPanel } from "../../panels";

/**
 * The app view.
 *
 * @constructor
 */
export default function AppView(props: { id: string, activePanel: string }): React.ReactElement {
  return (
    <View id={props.id} activePanel={props.activePanel}>
      <AppPanel id={props.id} />
    </View>
  );
}