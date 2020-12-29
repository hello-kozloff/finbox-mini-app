import React from 'react';
import { View } from '@vkontakte/vkui';
import { CatalogPanel } from "../../panels";
import { TabRoute } from "../../types";

/**
 * The catalog view.
 *
 * @constructor
 */
export default function CatalogView(): React.ReactElement {
  return (
    <View id={TabRoute.Catalog} activePanel={TabRoute.Catalog}>
      <CatalogPanel id={TabRoute.Catalog} />
    </View>
  );
}