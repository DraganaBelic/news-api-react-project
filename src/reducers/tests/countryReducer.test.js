import { countryReducer } from "../countryReducer";
import {
  disableCountrySelection,
  setCountry,
} from "../../actions/countryActions";

describe("countryReducer test", () => {
  it("should return the initial state", () => {
    expect(countryReducer(undefined, {})).toEqual({
      currentCountry: "gb",
    });
  });

  it("should handle DISABLE_COUNTRY_SELECTION", () => {
    expect(countryReducer({}, disableCountrySelection(true))).toEqual({
      disable: true,
    });
    expect(
      countryReducer({ disable: false }, disableCountrySelection(true))
    ).toEqual({
      disable: true,
    });
  });

  it("shoult handle SET_COUNTRY", () => {
    expect(countryReducer({}, setCountry("us"))).toEqual({
      currentCountry: "us",
    });
  });
});
