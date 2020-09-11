import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Search from "../components/search/Search";
import Article from "../components/article/Article";
import { useSelector } from "react-redux";
import Category from "../components/category/Category";
import TopNews from "../components/topNews/TopNews";
import Categories from "../components/category/Categories";

const RouterComponent = () => {
  const article = useSelector((state) => state.article.currentArticle);
  const country = useSelector((state) => state.country.currentCountry);
  return (
    <Switch>
      <Redirect exact from="/" to={`/${country}`} />

      <Route exact path="/:countryName">
        <TopNews />
      </Route>
      <Route path="/:countryName/categories">
        <Categories />
      </Route>
      <Route path="/:countryName/search">
        <Search />
      </Route>
      <Route path="/:countryName/article">
        {!article ? <Redirect to="/" /> : <Article />}
      </Route>
      <Route path={`/:countryName/:categoryName`}>
        <Category />
      </Route>
    </Switch>
  );
};

export default RouterComponent;
