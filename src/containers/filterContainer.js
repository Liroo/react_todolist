// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilterComponent from '../components/FilterComponent';
import { allFilter, completeFilter, incompleteFilter } from '../actions/filterAction';
import type { appReducer } from '../reducers/indexReducer';

function getFilterState(AppState: appReducer) {
  return {
    filterStatus: AppState.filterReducer.filterStatus,
  };
}

function setFilterState(dispatch) {
  return {
    actions: bindActionCreators({ allFilter, completeFilter, incompleteFilter }, dispatch),
  };
}

export default connect(getFilterState, setFilterState)(FilterComponent);
