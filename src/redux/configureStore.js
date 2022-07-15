import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { DataReducer } from './appreducer';

const reduced = combineReducers({
  moredetails: DataReducer,
});

const middle = [thunk, logger];

const store = createStore(
  reduced,
  applyMiddleware(...middle),
);

export default store;
