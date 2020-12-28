import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import { createBrowserHistory } from 'history';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));
const history = createBrowserHistory();

export { store, history };