import { SET_CURRENT_ARTICLE } from "../constants/ActionTypes";

export const setCurrentArticle = (article) => ({
  type: SET_CURRENT_ARTICLE,
  data: article,
});
