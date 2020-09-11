import React from "react";
import { useSelector } from "react-redux";
import { CategoryItemWrapper } from "./CategoryStyle";
import CategoryExpandableItem from "./CategoryExpandableItem";
import { categories } from "../../constants/Constant";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation();
  const currentCountry = useSelector((state) => state.country.currentCountry);
  return (
    <div>
      <h2>
        {t("top5NewsByCategoryFrom")} {t(currentCountry)}
      </h2>
      <CategoryItemWrapper>
        {Object.values(categories).map((category, i) => {
          return <CategoryExpandableItem key={i} category={category} />;
        })}
      </CategoryItemWrapper>
    </div>
  );
};

export default Categories;
