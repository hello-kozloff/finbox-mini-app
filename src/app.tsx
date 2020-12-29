import React from 'react';
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
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <Provider store={store}>
        <Router />
      </Provider>
    </FirebaseDatabaseProvider>
  );
}