import React, { useState } from "react";
import PropTypes from "prop-types";
import { HeaderStyle, HeaderItemStyle } from "./HeaderStyle";
import { setCountry } from "../../actions/countryActions";
import { country } from "../../constants/Constant";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = (props) => {
  const dispatch = useDispatch();
  const [visited, setVisited] = useState(country.GB);
  const countryState = useSelector((state) => state.country);
  const { t } = useTranslation();

  const currentCountry =
    countryState && countryState.currentCountry
      ? countryState.currentCountry
      : country.GB;
  const disabled = useSelector((state) => state.country.disable);
  const handleClick = (chosenCountry) => {
    if (!disabled) {
      dispatch(setCountry(chosenCountry));
      setVisited(chosenCountry);
    }
  };
  const { location } = props;
  const changeCountryInPath = (chosenCountry) => {
    let newPath = "";
    if (chosenCountry !== currentCountry) {
      newPath = location.pathname.replace(currentCountry, chosenCountry);
    }
    return newPath;
  };
  return (
    <HeaderStyle>
      <NavLink exact to={`/${currentCountry}`}>
        <HeaderItemStyle>{t("topNews")}</HeaderItemStyle>
      </NavLink>
      <NavLink to={`/${currentCountry}/categories`}>
        <HeaderItemStyle>{t("categories")}</HeaderItemStyle>
      </NavLink>
      <NavLink to={`/${currentCountry}/search`}>
        <HeaderItemStyle>{t("search")}</HeaderItemStyle>
      </NavLink>
      <NavLink
        to={() => changeCountryInPath(country.US)}
        onClick={() => handleClick(country.US)}
      >
        <HeaderItemStyle
          disabled={disabled}
          active={visited === country.US}
          small
          left_border
          right
        >
          <div>US</div>
        </HeaderItemStyle>
      </NavLink>
      <NavLink
        to={() => changeCountryInPath(country.GB)}
        onClick={() => handleClick(country.GB)}
      >
        <HeaderItemStyle
          disabled={disabled}
          active={visited === country.GB}
          small
          right
        >
          <div>GB</div>
        </HeaderItemStyle>
      </NavLink>
    </HeaderStyle>
  );
};

Header.propTypes = {
  disabled: PropTypes.bool,
};

export default withRouter(Header);
