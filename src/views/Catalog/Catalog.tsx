import React from 'react';
import { View } from '@vkontakte/vkui';
import { CatalogPanel } from "../../panels";

/**
 * The catalog view.
 *
 * @constructor
 */
export default function CatalogView(props: { id: string, activePanel: string }): React.ReactElement {
  return (
    <View id={props.id} activePanel={props.activePanel}>
      <CatalogPanel id={props.id} />
    </View>
  );
}