import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './app';
import reducers from '../reducers/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware =composeEnhancers(applyMiddleware(ReduxPromise))(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
