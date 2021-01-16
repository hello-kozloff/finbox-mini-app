import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import firebase from 'firebase';
import config from './firebase/config';
import { FirebaseDatabaseProvider } from '@react-firebase/database';
import { Provider } from 'react-redux';
import { store } from './store';
import Router from './router';

/**
 * The root app component.
 *
 * @constructor
 */
export default function App(): React.ReactElement {
  React.useEffect(() => {
    bridge.subscribe(({ detail: { type, data }}) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute('scheme');
        //@ts-ignore
        schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
  }, []);

  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <Provider store={store}>
        <ConfigProvider>
          <AdaptivityProvider>
            <Router />
          </AdaptivityProvider>
        </ConfigProvider>
      </Provider>
    </FirebaseDatabaseProvider>
  );
}