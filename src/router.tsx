import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { Provider, connect } from 'react-redux';
import { store } from './store';
import { AppRoot, Epic, Tabbar, TabbarItem, View } from '@vkontakte/vkui';
import { Icon28BookOutline, Icon28ServicesOutline } from '@vkontakte/icons';
import { fetchAccessToken } from './store/actions/user';
import { CatalogPanel, AppPanel } from './panels';
import { IRouterProps, IStory, TabRoute } from './types';

/**
 * The app router.
 *
 * @constructor
 */
function Router(props: IRouterProps): React.ReactElement {
  const [activeStory, setActiveStory] = React.useState<IStory>(TabRoute.App);

  React.useEffect(() => {
    props.fetchAccessToken();
  }, [props]);

  function onStoryChange(e: any): void {
    return setActiveStory(e.currentTarget.dataset.story);
  }

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAccessToken: bindActionCreators(fetchAccessToken, dispatch)
});

export default connect(null, mapDispatchToProps)(Router);