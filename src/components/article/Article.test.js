import React from "react";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import Article from "./Article";
import { render } from "@testing-library/react";
import thunk from "redux-thunk";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const middlewares = [thunk];
const initialState = {
  article: {
    currentArticle: {
      article: {
        title: "Article title",
        content: "Article content",
        urlToImage: "image",
      },
    },
  }
};
export const mockedStore = (state = initialState) => {
  const mockStore = configureStore(middlewares);
  return mockStore(state);
};
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (s) => s }),
}));
describe("Test Article component", () => {
  const store = mockedStore();
  const history = createMemoryHistory();
  const historyState = {prevPath: "/prevPath"}
  history.push("/", historyState)
  const {container} = render(
    <Provider store={store}>
      <Router history = {history}>
        <Article />
      </Router>
    </Provider>
  );
  it("should render with given state from Redux store", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
