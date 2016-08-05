import { FILTER_ALL, FILTER_COMPLETE, FILTER_INCOMPLETE } from '../types/filterType';

export type filterActionType = {
  type?: string,
};

export function allFilter(): filterActionType {
  return {
    type: FILTER_ALL,
    filterStatus: FILTER_ALL,
  };
}
export function completeFilter(): filterActionType {
  return {
    type: FILTER_COMPLETE,
    filterStatus: FILTER_COMPLETE,
  };
}
export function incompleteFilter(): filterActionType {
  return {
    type: FILTER_INCOMPLETE,
    filterStatus: FILTER_INCOMPLETE,
  };
}
