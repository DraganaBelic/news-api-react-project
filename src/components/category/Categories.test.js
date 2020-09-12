import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import Categories from "./Categories";

const middlewares = [thunk];
const initialState = {
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
describe("Test Categories component", () => {
  it("should render with given state from Redux store", () => {
    const store = mockedStore();
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
