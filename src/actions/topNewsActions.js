import {
  START_FETCH_TOP_NEWS,
  FETCH_TOP_NEWS_SUCCESS,
  FETCH_TOP_NEWS_ERROR,
} from "../constants/ActionTypes";

export const fetchTopNews = () => ({
  type: START_FETCH_TOP_NEWS,
});
export const fetchTopNewsSuccess = (data) => ({
  type: FETCH_TOP_NEWS_SUCCESS,
  data: data,
});
export const fetchTopNewsError = (error) => ({
  type: FETCH_TOP_NEWS_ERROR,
  data: error,
});
