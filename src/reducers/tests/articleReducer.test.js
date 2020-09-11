import { setCurrentArticle } from "../../actions/articleActions";
import { articleReducer } from "../articleReducer";
import { SET_CURRENT_ARTICLE } from "../../constants/ActionTypes";

describe("articleReducer test", () => {
  it("should return the initial state", () => {
    expect(articleReducer(undefined, {})).toEqual({});
  });

  it("should handle SET_CURRENT_ARTICLE", () => {
    expect(
      articleReducer(
        {},
        setCurrentArticle({
          title: "Article title",
          description: "Article desctiption",
        })
      )
    ).toEqual({
      currentArticle: {
        title: "Article title",
        description: "Article desctiption",
      },
    });
  });
});
