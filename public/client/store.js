import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers/main.js';

var Store = (state) => {
  if (state) {
    return createStore(rootReducer, state);
  } else {
    return createStore(rootReducer);
  }
}

export default Store;