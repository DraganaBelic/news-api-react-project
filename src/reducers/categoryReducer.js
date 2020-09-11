import {
  START_FETCH_BY_CATEGORY,
  SET_CURRENT_CATEGORY,
  FETCH_BY_CATEGORY_SUCCESS,
  FETCH_BY_CATEGORY_ERROR,
  START_FETCH_ALL_BY_CATEGORY,
  FETCH_ALL_BY_CATEGORY_SUCCESS,
  FETCH_ALL_BY_CATEGORY_ERROR,
} from "../constants/ActionTypes";

const initialState = {
  loading: false,
  response: null,
  error: null,
};
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.data,
      };
    case START_FETCH_BY_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case START_FETCH_ALL_BY_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        [action.category]: {
          data: action.data,
        },
        loading: false,
        error: null,
      };
    case FETCH_ALL_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        response: action.data,
        loading: false,
        error: null,
      };
    case FETCH_BY_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FETCH_ALL_BY_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
