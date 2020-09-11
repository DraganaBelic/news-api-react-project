import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TopNewsWrapperStyle } from "../topNews/TopNewsStyle";
import Thumbnail from "../thumbnail/Thumbnail";
import { useTranslation } from "react-i18next";
import { fetchAllByCategory } from "../../api/apiUtil";
import LoaderComponent from "../../general/LoaderComponent";

const Category = () => {
  const currentCountry = useSelector((state) => state.country.currentCountry);
  const fetchData = useSelector((state) => state.category);
  const response = fetchData.response;
  const category = useSelector((state) => state.category.currentCategory);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  useEffect(() => {
    dispatch(fetchAllByCategory(currentCountry, category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCountry, category]);
  let fetchedNews =
    response && response.articles
      ? response.articles.map((tn, i) => {
          return <Thumbnail key={i} article={tn} />;
        })
      : "";
  return (
    <Fragment>
      <h2>
        {t("top")} {t(category)} {t("newsFrom")} {t(currentCountry)}
      </h2>
      {fetchData && fetchData.loading ? (
        <LoaderComponent />
      ) : (
        <TopNewsWrapperStyle>{fetchedNews}</TopNewsWrapperStyle>
      )}
    </Fragment>
  );
};

export default Category;
