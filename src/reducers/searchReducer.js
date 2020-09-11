import { initialState } from "../constants/ApiConstants";
import {
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from "../constants/ActionTypes";

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        response: action.data,
        loading: false,
        error: null,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data.error,
      };
    default:
      return state;
  }
};
