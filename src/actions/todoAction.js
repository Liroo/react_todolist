// @flow

import { ADD_TODO, COMPLETE, INCOMPLETE } from '../types/todoType';
import type { todoType } from '../types/todoType';

import _ from 'lodash';

export type addTodoActionType = {
  type?: typeof ADD_TODO | typeof COMPLETE | typeof INCOMPLETE,
  todo?: todoType,
  id?: string,
};

export function addTodo(todoLabel: string): addTodoActionType {
  return {
    type: ADD_TODO,
    todo: {
      id: _.uniqueId('todo_'),
      label: todoLabel,
      completed: false,
    },
  };
}
export function completeTodo(todoId: string): addTodoActionType {
  return {
    type: COMPLETE,
    id: todoId,
  };
}
export function incompleteTodo(todoId: string): addTodoActionType {
  return {
    type: INCOMPLETE,
    id: todoId,
  };
}
