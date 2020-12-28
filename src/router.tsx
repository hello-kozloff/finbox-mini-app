import React from 'react';
import { AppRoot, Epic, Tabbar, TabbarItem, View } from '@vkontakte/vkui';
import { Icon28BookOutline, Icon28ServicesOutline } from '@vkontakte/icons';
import { CatalogPanel, AppPanel } from './panels';
import { IStory, TabRoute } from './types';

/**
 * The app router.
 *
 * @constructor
 */
export default function Router(): React.ReactElement {
  const [activeStory, setActiveStory] = React.useState<IStory>(TabRoute.App);

  function onStoryChange(e: any): void {
    return setActiveStory(e.currentTarget.dataset.story);
  }

  return (
    <AppRoot>
      <Epic activeStory={activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === TabRoute.Catalog}
            data-story={TabRoute.Catalog}
          ><Icon28BookOutline /></TabbarItem>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === TabRoute.App}
            data-story={TabRoute.App}
          ><Icon28ServicesOutline /></TabbarItem>
        </Tabbar>
      }>
        <View id={TabRoute.Catalog} activePanel={TabRoute.Catalog}>
          <CatalogPanel id={TabRoute.Catalog} />
        </View>
        <View id={TabRoute.App} activePanel={TabRoute.App}>
          <AppPanel id={TabRoute.App} />
        </View>
      </Epic>
    </AppRoot>
  );
}