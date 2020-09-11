import {
  START_FETCH_TOP_NEWS,
  FETCH_TOP_NEWS_SUCCESS,
  FETCH_TOP_NEWS_ERROR,
} from "../constants/ActionTypes";
import { initialState } from "../constants/ApiConstants";

export const topNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH_TOP_NEWS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TOP_NEWS_SUCCESS:
      return {
        ...state,
        response: action.data,
        loading: false,
        error: null,
      };
    case FETCH_TOP_NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data.error,
      };
    default:
      return state;
  }
};
