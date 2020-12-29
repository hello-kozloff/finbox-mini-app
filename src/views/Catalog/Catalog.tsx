import React from 'react';
import { View } from '@vkontakte/vkui';
import { CatalogPanel } from "../../panels";
import { ViewProps } from "@vkontakte/vkui/dist/components/View/View";
import { PanelProps } from "@vkontakte/vkui/dist/components/Panel/Panel";

/**
 * The catalog view.
 *
 * @constructor
 */
export default function CatalogView(props: ViewProps & PanelProps): React.ReactElement {
  return (
    <View id={props.id} activePanel={props.activePanel}>
      <CatalogPanel id={props.id} />
    </View>
  );
}