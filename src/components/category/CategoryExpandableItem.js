import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import {
  NewsByCategoryWrapperStyle,
  CategoryTitleStyle,
} from "./CategoryStyle";
import { setCurrentCategory } from "../../actions/categoryActions";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { icons } from "../../constants/Icons";
import { getDataByCategory } from "../../api/apiUtil";
import { disableCountrySelection } from "../../actions/countryActions";

const CategoryExpandableItem = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const currentCountry = useSelector((state) => state.country.currentCountry);
  const response = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { category } = props;

  useEffect(() => {
    dispatch(disableCountrySelection(false))
    dispatch(getDataByCategory(currentCountry, category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, currentCountry]);
  const fetchedNews =
    response &&
    response[category] &&
    response[category].data &&
    response[category].data.articles;
  const returnThreeElements = () => {
    let tempArray = [];
    for (let i = startIndex; i < startIndex + 3; i++) {
      fetchedNews &&
        tempArray.push(<Thumbnail key={i} article={fetchedNews[i]} />);
    }
    return tempArray;
  };

  return (
    <div>
      <CategoryTitleStyle>
        <Link to={`/${currentCountry}/${category}`}
          onClick={() => {
            dispatch(setCurrentCategory(category));
          }}
        >
          {t(category)}{" "}
        </Link>
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? (
            <i className={icons.CHEVRON_UP}></i>
          ) : (
            <i className={icons.CHEVRON_DOWN}></i>
          )}
        </button>
      </CategoryTitleStyle>
      <NewsByCategoryWrapperStyle visible={isExpanded}>
        {fetchedNews && startIndex > 0 && (
          <button
            onClick={() => {
              setStartIndex(startIndex - 1);
            }}
          >
            <i className={icons.CHEVRON_LEFT}></i>
          </button>
        )}
        {returnThreeElements()}
        {fetchedNews &&
          fetchedNews.length > 3 &&
          startIndex + 3 < fetchedNews.length && (
            <button
              onClick={() => {
                setStartIndex(startIndex + 1);
              }}
            >
              <i className={icons.CHEVRON_RIGHT}></i>
            </button>
          )}
      </NewsByCategoryWrapperStyle>
    </div>
  );
};

CategoryExpandableItem.propTypes = {
  category: PropTypes.string,
};
export default CategoryExpandableItem;
