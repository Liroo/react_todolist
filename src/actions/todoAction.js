// @flow

import { ITEM_ADD_START, ITEM_ADD_SUCCESS, ITEM_ADD_FAILURE, ITEM_UPDATE, ITEM_LOADING, ITEM_LABEL_UPDATE, ITEM_DELETE } from '../types/todoType';
import type { todoType } from '../types/todoType';
import _ from 'lodash';
import addTodoApi from '../api/todoApi';

export type addTodoActionType = {
  type?: string,
  todo?: todoType,
  id?: string,
  label?: string,
};
export function addTodo(todoLabel: string, id: string): addTodoActionType {
  const todo: todoType = {
    id: id || _.uniqueId('todo_'),
    label: todoLabel,
    completed: false,
    status: ITEM_LOADING,
  };
  return dispatch => {
    dispatch({
      type: ITEM_ADD_START,
      todo,
    });
    return addTodoApi.createTodo(todo)
    .then(() => dispatch({
      type: ITEM_ADD_SUCCESS,
      id: todo.id,
    }))
    .catch((error) => {
      dispatch({
        type: ITEM_ADD_FAILURE,
        id: todo.id,
        error: error,
      });
    });
  };
}

export function deleteTodo(todoId: string): addTodoActionType {
  return {
    type: ITEM_DELETE,
    id: todoId,
  };
}

export function updateLabelTodo(todoId: string, todoNewLabel: string): addTodoActionType {
  return {
    type: ITEM_LABEL_UPDATE,
    id: todoId,
    label: todoNewLabel,
  };
}

export function updateTodo(todoId: string): addTodoActionType {
  return {
    type: ITEM_UPDATE,
    id: todoId,
  };
}
