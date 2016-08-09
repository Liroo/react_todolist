// @flow

import { ITEM_ADD_START, ITEM_ADD_SUCCESS, ITEM_ADD_FAILURE, ITEM_UPDATE, ITEM_OK, ITEM_ERROR, ITEM_LOADING, ITEM_LABEL_UPDATE, ITEM_DELETE } from '../types/todoType';
import type { addTodoActionType } from '../actions/todoAction';
import type { todoType } from '../types/todoType';
import { fromJS, Map, List } from 'immutable';

const initialState: Array<todoType> = [
  {
    label: 'Basic',
    id: 'todo_-1',
    completed: false,
    status: ITEM_LOADING,
  },
  {
    label: 'Loaded',
    id: 'todo_-3',
    completed: false,
    status: ITEM_OK,
  },
  {
    label: 'Completed',
    id: 'todo_-2',
    completed: true,
    status: ITEM_OK,
  },
  {
    label: 'Test',
    id: 'todo_-4',
    completed: false,
    status: ITEM_ERROR,
  },
];

const initialStateImmutable = fromJS(initialState);

function todoReducer(todos: List<Map<any, any>> = initialStateImmutable, action: addTodoActionType = {}): List<Map<any, any>> {
  let index;

  switch (action.type) {

    case ITEM_ADD_START:
      const newTodo = fromJS(action.todo);
      index = todos.findIndex((todo) => todo.get('id') === newTodo.get('id'));
      if (index === -1) {
        return todos.push(newTodo);
      }
      return todos.updateIn([index, 'status'], () => ITEM_LOADING);

    case ITEM_ADD_SUCCESS:
      index = todos.findIndex((todo) => todo.get('id') === action.id);
      return todos.updateIn([index, 'status'], () => ITEM_OK);

    case ITEM_ADD_FAILURE:
      index = todos.findIndex((todo) => todo.get('id') === action.id);
      return todos.updateIn([index, 'status'], () => ITEM_ERROR);

    case ITEM_UPDATE:
      index = todos.findIndex((todo) => todo.get('id') === action.id);
      return todos.updateIn([index, 'completed'], (completed) => !completed);

    case ITEM_LABEL_UPDATE:
      index = todos.findIndex((todo) => todo.get('id') === action.id);
      return todos.updateIn([index, 'label'], () => action.label);

    case ITEM_DELETE:
      index = todos.findIndex((todo) => todo.get('id') === action.id);
      return todos.delete(index);

    default:
      return todos;
  }
}

export default todoReducer;
