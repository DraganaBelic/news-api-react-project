import axios from "axios";
import {
  fetchTopNews,
  fetchTopNewsSuccess,
  fetchTopNewsError,
} from "../actions/topNewsActions";
import {
  searchStart,
  searchSuccess,
  searchError,
} from "../actions/searchActions";
import {
  fetchByCategorySuccess,
  fetchByCategoryError,
  startFetchByCategory,
  fetchAllByCategorySuccess,
  fetchAllByCategoryError,
  startFetchAllByCategory,
} from "../actions/categoryActions";
import { endpoint, API_KEY } from "../constants/Constant";

export const getTopNews = (countryName) => {
  return async (dispatch) => {
    try {
      dispatch(fetchTopNews());
      const response = await axios.get(
        `${endpoint}top-headlines?country=${countryName}&apiKey=${API_KEY}`
      );
      dispatch(fetchTopNewsSuccess(response.data));
    } catch (error) {
      dispatch(fetchTopNewsError(error));
    }
  };
};

export const search = (query) => {
  return async (dispatch) => {
    try {
      dispatch(searchStart());
      const response = await axios.get(
        `${endpoint}top-headlines?q=${query}&apiKey=${API_KEY}`
      );
      dispatch(searchSuccess(response.data));
    } catch (error) {
      dispatch(searchError(error));
    }
  };
};
export const fetchAllByCategory = (currentCountry, categoryName) => {
  return async (dispatch) => {
    try {
      dispatch(startFetchAllByCategory());
      const response = await axios.get(
        `${endpoint}top-headlines?country=${currentCountry}&category=${categoryName}&apiKey=${API_KEY}`
      );
      dispatch(fetchAllByCategorySuccess(response.data));
    } catch (error) {
      dispatch(fetchAllByCategoryError(error));
    }
  };
};

export const getDataByCategory = (currentCountry, category) => {
  return async (dispatch) => {
    try {
      dispatch(startFetchByCategory());
      const response = await axios.get(
        `${endpoint}top-headlines?country=${currentCountry}&category=${category}&page=1&pageSize=5&apiKey=${API_KEY}`
      );
      const data = response.data;
      dispatch(fetchByCategorySuccess(data, category));
    } catch (error) {
      dispatch(fetchByCategoryError(error));
    }
  };
};
