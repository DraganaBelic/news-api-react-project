import {
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from "../constants/ActionTypes";

export const searchStart = () => ({
  type: SEARCH_START,
});
export const searchSuccess = (data) => ({
  type: SEARCH_SUCCESS,
  data: data,
});
export const searchError = (error) => ({
  type: SEARCH_ERROR,
  data: error,
});
