import {
  FETCH_BY_CATEGORY_SUCCESS,
  START_FETCH_BY_CATEGORY,
  FETCH_BY_CATEGORY_ERROR,
  SET_CURRENT_CATEGORY,
  START_FETCH_ALL_BY_CATEGORY,
  FETCH_ALL_BY_CATEGORY_SUCCESS,
  FETCH_ALL_BY_CATEGORY_ERROR,
} from "../constants/ActionTypes";

export const startFetchByCategory = () => ({
  type: START_FETCH_BY_CATEGORY,
});
export const fetchByCategorySuccess = (data, category) => ({
  type: FETCH_BY_CATEGORY_SUCCESS,
  data: data,
  category: category,
});
export const fetchByCategoryError = (error) => ({
  type: FETCH_BY_CATEGORY_ERROR,
  error: error,
});
export const setCurrentCategory = (data) => ({
  type: SET_CURRENT_CATEGORY,
  data: data,
});

export const startFetchAllByCategory = () => ({
  type: START_FETCH_ALL_BY_CATEGORY,
});
export const fetchAllByCategorySuccess = (data, category) => ({
  type: FETCH_ALL_BY_CATEGORY_SUCCESS,
  data: data,
  category: category,
});
export const fetchAllByCategoryError = (error) => ({
  type: FETCH_ALL_BY_CATEGORY_ERROR,
  error: error,
});
