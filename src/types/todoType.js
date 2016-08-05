// @flow

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE = 'COMPLETE';
export const INCOMPLETE = 'INCOMPLETE';

export type todoType = {
  id: string,
  label: string,
  completed: boolean,
};
