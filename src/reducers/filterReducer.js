// @flow

import { FILTER_ALL, FILTER_COMPLETE, FILTER_INCOMPLETE } from '../types/filterType';
import type { filterType } from '../types/filterType';
import type { filterActionType } from '../actions/filterAction';

const initialState = {
  filterStatus: FILTER_ALL,
};

function filterReducer(filter: filterType = initialState, action: filterActionType = {}): filterType {
  switch (action.type) {
    case FILTER_ALL:
      return {
        filterStatus: FILTER_ALL,
      };
    case FILTER_COMPLETE:
      return {
        filterStatus: FILTER_COMPLETE,
      };
    case FILTER_INCOMPLETE:
      return {
        filterStatus: FILTER_INCOMPLETE,
      };
    default:
      return filter
  }
}

export default filterReducer;
