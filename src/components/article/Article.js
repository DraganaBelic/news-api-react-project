import React from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArticleDivStyle,
  ArticleTitleStyle,
  ArticleImageStyle,
  ArticleContentStyle,
} from "./ArticleStyle";

const Article = (props) => {
  const article = useSelector((state) => state.article.currentArticle);
  const { t } = useTranslation();
  const { title, content, urlToImage } = article;
  const { location } = props;
  return (
    <ArticleDivStyle>
      <ArticleTitleStyle>{title}</ArticleTitleStyle>
      <ArticleImageStyle>
        <img alt={title} src={urlToImage}></img>
      </ArticleImageStyle>
      <ArticleContentStyle>{content}</ArticleContentStyle>
      <Link to={`${location.state.prevPath}`}>
        {"<"}
        {t("backToList")}
      </Link>
    </ArticleDivStyle>
  );
};

export default withRouter(Article);
