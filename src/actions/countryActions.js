import {
  SET_COUNTRY,
  DISABLE_COUNTRY_SELECTION,
} from "../constants/ActionTypes";

export const setCountry = (country) => ({
  type: SET_COUNTRY,
  data: country,
});

export const disableCountrySelection = (disable) => ({
  type: DISABLE_COUNTRY_SELECTION,
  data: disable,
});
