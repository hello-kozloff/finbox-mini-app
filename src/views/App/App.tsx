import React from 'react';
import { View } from '@vkontakte/vkui';
import { AppPanel } from "../../panels";
import { ViewProps } from "@vkontakte/vkui/dist/components/View/View";
import { PanelProps } from "@vkontakte/vkui/dist/components/Panel/Panel";

/**
 * The app view.
 *
 * @constructor
 */
export default function AppView(props: ViewProps & PanelProps): React.ReactElement {
  return (
    <View id={props.id} activePanel={props.activePanel}>
      <AppPanel id={props.id} />
    </View>
  );
}