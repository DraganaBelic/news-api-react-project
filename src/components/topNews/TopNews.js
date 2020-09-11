import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import { TopNewsWrapperStyle, TopNewsTitle } from "./TopNewsStyle";
import { useTranslation } from "react-i18next";
import { getTopNews } from "../../api/apiUtil";
import { disableCountrySelection } from "../../actions/countryActions";
import { useParams } from "react-router-dom";
import LoaderComponent from "../../general/LoaderComponent";

const TopNews = () => {
  const fetchData = useSelector((state) => state.topNewsReducer);
  const response = fetchData.response;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  let { countryName } = useParams();

  useEffect(() => {
    dispatch(disableCountrySelection(false));
    dispatch(getTopNews(countryName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryName]);
  let fetchedNews =
    response && response.articles
      ? response.articles.map((tn, i) => {
          return <Thumbnail key={i} article={tn} />;
        })
      : "";
  return (
    <Fragment>
      <TopNewsTitle>
        {t("topNewsFrom")} {t(countryName)}
      </TopNewsTitle>
      <TopNewsWrapperStyle>
        {fetchData && fetchData.loading ? <LoaderComponent /> : fetchedNews}
      </TopNewsWrapperStyle>
    </Fragment>
  );
};

export default TopNews;
