import React from 'react';
import { AppRoot, Epic, Tabbar, TabbarItem, View } from '@vkontakte/vkui';
import { Icon28BookOutline, Icon28ServicesOutline } from '@vkontakte/icons';
import { CatalogPanel, AppPanel } from './panels';
import { IStory } from './types/story';

/**
 * The app component.
 *
 * @constructor
 */
export default function App(): React.ReactElement {
  const [activeStory, setActiveStory] = React.useState<IStory>('catalog');

  function onStoryChange(e: any): void {
    return setActiveStory(e.currentTarget.dataset.story);
  }

  return (
    <AppRoot>
      <Epic activeStory={activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === 'catalog'}
            data-story="catalog"
          ><Icon28BookOutline /></TabbarItem>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === 'app'}
            data-story="app"
          ><Icon28ServicesOutline /></TabbarItem>
        </Tabbar>
      }>
        <View id="catalog" activePanel="catalog">
          <CatalogPanel id="catalog" />
        </View>
        <View id="app" activePanel="app">
          <AppPanel id="app" />
        </View>
      </Epic>
    </AppRoot>
  );
}