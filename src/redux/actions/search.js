import {
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from '../actionTypes/search';

export const searchStart = () => ({ type: SEARCH_START });
export const searchSuccess = (data) => ({
  type: SEARCH_SUCCESS,
  payload: data
});

export const searchError = () => ({ type: SEARCH_ERROR });
