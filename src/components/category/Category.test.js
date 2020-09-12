import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import Category from "./Category";

const middlewares = [thunk];
const initialState = {
  category: {
    currentCategory: "science",
    response: {
      articles: [
        {
          title: "Article title 1",
          urlToImage: "urlToImage",
          description: "Article description 1",
        },
        {
          title: "Article title 2",
          urlToImage: "urlToImage",
          description: "Article description 2",
        }
      ],
    },
    loading: true
  },
  country: {
    currentCountry: "gb",
  },
};

export const mockedStore = (state = initialState) => {
  const mockStore = configureStore(middlewares);
  return mockStore(state);
};

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (s) => s }),
}));
describe("Test Category component", () => {
  const store = mockedStore();
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Category />
      </MemoryRouter>
    </Provider>
  );
  it("should render with given state from Redux store", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
