import { country } from "../constants/Constant";
import {
  SET_COUNTRY,
  DISABLE_COUNTRY_SELECTION,
} from "../constants/ActionTypes";

const intialState = {
  currentCountry: country.GB,
};
export const countryReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return { ...state, currentCountry: action.data };
    case DISABLE_COUNTRY_SELECTION:
      return { ...state, disable: action.data };

    default:
      return state;
  }
};
