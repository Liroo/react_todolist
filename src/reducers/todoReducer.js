// @flow

import { ADD_TODO, COMPLETE, INCOMPLETE } from '../types/todoType';
import type { addTodoActionType } from '../actions/todoAction';
import type { todoType } from '../types/todoType';
import _ from 'lodash';

function todoReducer(todos: Array<todoType> = [], action: addTodoActionType = {}): Array<todoType> {
  let index;
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        action.todo,
      ];
    case COMPLETE:
      index = _.findIndex(todos, (todo) => todo.id === action.id);
      return [
        ...todos.slice(0, index),
        Object.assign({}, todos[index], {
          completed: true,
        }),
        ...todos.slice(index + 1),
      ];
    case INCOMPLETE:
      index = _.findIndex(todos, (todo) => todo.id === action.id);
      return [
        ...todos.slice(0, index),
        Object.assign({}, todos[index], {
          completed: false,
        }),
        ...todos.slice(index + 1),
      ];
    default:
      return todos;
  }
}

export default todoReducer;
