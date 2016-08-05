// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListTodoComponent from '../components/ListTodoComponent';
import type { appReducer } from '../reducers/indexReducer';
import { completeTodo, incompleteTodo } from '../actions/todoAction';

function getTodoState(AppState: appReducer) {
  return {
    todos: AppState.todoReducer,
    filterStatus: AppState.filterReducer.filterStatus,
  };
}

function setTodoState(dispatch) {
  return {
    actions: bindActionCreators({ completeTodo, incompleteTodo }, dispatch),
  };
}

export default connect(getTodoState, setTodoState)(ListTodoComponent);
