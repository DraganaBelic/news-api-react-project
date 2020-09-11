import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import * as actions from "../../actions/topNewsActions";
import * as types from "../../constants/ActionTypes";
import { getTopNews } from "../../api/apiUtil";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

jest.mock("axios");

describe("getTopNews", () => {
  it("fetches successfully top news from an API", async () => {
    const dispatch = jest.fn();
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));
    await expect(getTopNews("us")(dispatch));

    expect(dispatch).toHaveBeenCalledWith(actions.fetchTopNews());
    expect(dispatch).toHaveBeenCalledWith(actions.fetchTopNewsSuccess([]));
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    const dispatch = jest.fn();
    await getTopNews("us")(dispatch);
    expect(dispatch).toHaveBeenCalledWith(
      actions.fetchTopNewsError(new Error(errorMessage))
    );
  });
});
