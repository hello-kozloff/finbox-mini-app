import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppRoot, Epic, Tabbar, TabbarItem, View } from '@vkontakte/vkui';
import { Icon28BookOutline, Icon28ServicesOutline } from '@vkontakte/icons';
import { fetchAccessToken } from './store/actions/user';
import { CatalogView, AppView } from './views';
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
    <AppRoot>
      <Epic activeStory={activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === TabRoute.Catalog}
            data-story={TabRoute.Catalog}
            text="Займы"
          ><Icon28BookOutline /></TabbarItem>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === TabRoute.App}
            data-story={TabRoute.App}
            text="Трекер"
          ><Icon28ServicesOutline /></TabbarItem>
        </Tabbar>
      }>
        <CatalogView id={TabRoute.Catalog} activePanel={TabRoute.Catalog} />
        <AppView id={TabRoute.App} activePanel={TabRoute.App} />
      </Epic>
    </AppRoot>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAccessToken: bindActionCreators(fetchAccessToken, dispatch)
});

export default connect(null, mapDispatchToProps)(Router);