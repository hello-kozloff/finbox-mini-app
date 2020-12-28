import React from 'react';
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
    <Provider store={store}>
      <Router />
    </Provider>
  );
}