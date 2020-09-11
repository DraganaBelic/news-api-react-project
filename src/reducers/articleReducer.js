import { SET_CURRENT_ARTICLE } from "../constants/ActionTypes";

export const articleReducer = (state = {}, action) => {
  
  switch (action.type) {
    case SET_CURRENT_ARTICLE:
      return { ...state, currentArticle: action.data };
    default:
      return state;
  }
};
