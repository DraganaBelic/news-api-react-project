import React from "react";
import {
  ThumbnailImageStyle,
  ThumbnailContentStyle,
  ThumbnailTitleStyle,
  ThumbnailDivStyle,
} from "./ThumbnailStyle";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentArticle } from "../../actions/articleActions";
import { disableCountrySelection } from "../../actions/countryActions";
import { useTranslation } from "react-i18next";
const Thumbnail = (props) => {
  const {
    article: { title, description, urlToImage },
    article,
  } = props;
  const country = useSelector((state) => state.country.currentCountry);
  const { t } = useTranslation();
  const { location } = props;
  const dispatch = useDispatch();
  const more = t("more");
  return (
    <ThumbnailDivStyle>
      <ThumbnailTitleStyle>{title}</ThumbnailTitleStyle>
      <ThumbnailImageStyle>
        <img alt={title} src={urlToImage}></img>
      </ThumbnailImageStyle>
      <ThumbnailContentStyle>
        <div>{description}</div>
      </ThumbnailContentStyle>
      <Link
        to={{
          pathname: `/${country}/article/`,
          state: { prevPath: location.pathname },
        }}
        onClick={() => {
          dispatch(setCurrentArticle(article));
          dispatch(disableCountrySelection(true));
        }}
      >
        {more}
      </Link>
    </ThumbnailDivStyle>
  );
};

export default withRouter(Thumbnail);
