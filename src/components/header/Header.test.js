import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

const middlewares = [thunk];
const initialState = {
  country: {
    countryState: "gb",
  },
};
export const mockedStore = (state = initialState) => {
  const mockStore = configureStore(middlewares);
  return mockStore(state);
};
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (s) => s }),
}));
describe("Test Header component", () => {
  it("should render properly", () => {
    const store = mockedStore();
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
