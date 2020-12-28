import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import watcher from './sagas/watcher';
import { createBrowserHistory } from 'history';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
const history = createBrowserHistory();

sagaMiddleware.run(watcher);

export { store, history };