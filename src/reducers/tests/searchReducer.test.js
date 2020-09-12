import { searchStart, searchSuccess, searchError } from "../../actions/searchActions";
import { searchReducer } from "../searchReducer";

describe("searchReducer test", () => {
  it("should return the initial state", () => {
    expect(searchReducer(undefined, {})).toEqual({
      response: null,
      loading: false,
      error: null,
    });
  });

  it("should handle SEARCH_START", () => {
    expect(searchReducer({}, searchStart())).toEqual({
      loading: true,
    });
  });

  it("should handle SEARCH_SUCCESS", () => {
    expect(
      searchReducer(
        {},
        searchSuccess({
          title: "Article title",
          description: "Article desctiption",
        })
      )
    ).toEqual({
      response: {
        title: "Article title",
        description: "Article desctiption",
      },
      loading: false,
      error: null,
    });
  });

  it("should handle SEARCH_ERROR", () => {
      expect(searchReducer({}, searchError({error: "err"}))).toEqual({
          loading: false,
          error: "err"
      })
  })
});
