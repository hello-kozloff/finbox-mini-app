import React from 'react';
import { AppRoot, Epic, Tabbar, TabbarItem, View, Panel, PanelHeader } from '@vkontakte/vkui';
import { Icon28NewsfeedOutline } from '@vkontakte/icons';
import { IStory } from './types/story';

/**
 * The app component.
 *
 * @constructor
 */
export default function App(): React.ReactElement {
  const [activeStory, setActiveStory] = React.useState<IStory>('feed');

  function onStoryChange(e: any): void {
    return setActiveStory(e.currentTarget.dataset.story);
  }

  return (
    <AppRoot>
      <Epic activeStory={activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === 'feed'}
            data-story="feed"
            text="Новости"
          ><Icon28NewsfeedOutline /></TabbarItem>
        </Tabbar>
      }>
        <View id="feed" activePanel="feed">
          <Panel id="feed">
            <PanelHeader>Feed</PanelHeader>
          </Panel>
        </View>
      </Epic>
    </AppRoot>
  );
}