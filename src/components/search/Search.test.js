import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import Search from "./Search";

const middlewares = [thunk];
const initialState = {
  country: {
    currentCountry: "gb",
  },
  search: {
    fetchData: {
      articles: [
        {
          title: "article",
          urlToImage: "url",
          description: "desc",
        },
      ],
    },
  },
};
export const mockedStore = (state = initialState) => {
  const mockStore = configureStore(middlewares);
  return mockStore(state);
};
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (s) => s }),
}));
describe("Test Search component", () => {
  const store = mockedStore();
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    </Provider>
  );
  it("should render with given state from Redux store", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
