import React from 'react';
import { hydrate } from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import store from './store.js';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = Store(rootReducer, preloadedState);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);