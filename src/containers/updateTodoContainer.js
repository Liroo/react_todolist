import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLabelTodo, deleteTodo } from '../actions/todoAction';
import UpdateTodoComponent from '../components/UpdateTodoComponent';

function updateLabelTodoAction(dispatch: Function) {
  return {
    actions: bindActionCreators({ updateLabelTodo, deleteTodo }, dispatch),
  };
}

export default connect(null, updateLabelTodoAction)(UpdateTodoComponent);
