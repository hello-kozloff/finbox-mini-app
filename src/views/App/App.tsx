import React from 'react';
import { View } from '@vkontakte/vkui';
import { AppPanel } from "../../panels";
import { TabRoute } from "../../types";

/**
 * The app view.
 *
 * @constructor
 */
export default function AppView(): React.ReactElement {
  return (
    <View id={TabRoute.App} activePanel={TabRoute.App}>
      <AppPanel id={TabRoute.App} />
    </View>
  );
}