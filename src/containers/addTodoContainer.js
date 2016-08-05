import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/todoAction';
import AddTodoComponent from '../components/AddTodoComponent';

function addTodoAction(dispatch: Function) {
  return {
    addTodo: bindActionCreators(addTodo, dispatch),
  };
}

export default connect(null, addTodoAction)(AddTodoComponent);
