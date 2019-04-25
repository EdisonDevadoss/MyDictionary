const INITIAL_STATE = {
  submitted: false,
  error: false,
  meanings: []
};

import {
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from '../actionTypes/search';

function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_START: {
      return { ...state, submitted: true };
    }
    case SEARCH_SUCCESS: {
      return {
        ...state,
        meanings: action.payload,
        submitted: false
      };
    }
    case SEARCH_ERROR: {
      return { ...state, submitted: false, error: true };
    }

    default:
      return state;
  }
}
export default searchReducer;
