import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TopNewsWrapperStyle } from "../topNews/TopNewsStyle";
import Thumbnail from "../thumbnail/Thumbnail";
import { search } from "../../api/apiUtil";
import { disableCountrySelection } from "../../actions/countryActions";
import { useTranslation } from "react-i18next";
import { SearchDivStyle } from "./SearchStyle";
import LoaderComponent from "../../general/LoaderComponent";

const Search = () => {
  const currentCountry = useSelector((state) => state.country.currentCountry);
  const dispatch = useDispatch();
  const fetchData = useSelector((state) => state.search);
  const response = fetchData.response;
  const [query, setQuery] = useState("");

  const { t } = useTranslation();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setQuery(event.target.value);
    }
  };
  useEffect(() => {
    dispatch(disableCountrySelection(false));
    if (query) {
      dispatch(search(query));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  let fetchedNews =
    response && response.articles
      ? response.articles.map((tn, i) => {
          return <Thumbnail key={i} article={tn} />;
        })
      : "";
  return (
    <div>
      <SearchDivStyle>
        <h2>
          {t("searchTopNewsFrom")} {t(currentCountry)} {t("byTerm")}:
        </h2>
        <input
          placeholder={t("searchTerm")}
          onKeyDown={handleKeyDown}
          type="search"
        ></input>
        {fetchData && fetchData.loading ? (
          <LoaderComponent />
        ) : (
          <TopNewsWrapperStyle>{fetchedNews}</TopNewsWrapperStyle>
        )}
      </SearchDivStyle>
    </div>
  );
};

export default Search;
