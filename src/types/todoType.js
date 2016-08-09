// @flow

export const ITEM_ADD_START = 'ITEM_ADD_START';
export const ITEM_ADD_SUCCESS = 'ITEM_ADD_SUCCESS';
export const ITEM_ADD_FAILURE = 'ITEM_ADD_FAILURE';
export const ITEM_UPDATE = 'ITEM_UPDATE';
export const ITEM_LABEL_UPDATE = 'ITEM_LABEL_UPDATE';
export const ITEM_DELETE = 'ITEM_DELETE';

export const ITEM_OK = 'ITEM_OK';
export const ITEM_ERROR = 'ITEM_ERROR';
export const ITEM_LOADING = 'ITEM_LOADING';

export type todoType = {
  id: string,
  label: string,
  completed: boolean,
  status: string,
};
