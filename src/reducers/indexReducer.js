// @flow

import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import filterReducer from './filterReducer';
import type { todoType } from '../types/todoType';

export type appReducer = {
  todoReducer: Array<todoType>,
  filterReducer: {
    filterStatus: string,
  },
};

export default combineReducers({
  todoReducer,
  filterReducer,
});
