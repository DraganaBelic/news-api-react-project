import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      entertainment: "Entertainment",
      general: "General",
      health: "Health",
      science: "Science",
      technology: "Technology",
      gb: "Great Britain",
      us: "United States",
      backToList: "Back to list",
      topNewsFrom: "Top news from",
      top: "Top",
      newsFrom: "News from",
      searchTerm: "Search term",
      searchTopNewsFrom: "Serch top news from",
      byTerm: "by term",
      more: "More >",
      categories: "Categories",
      search: "Search",
      top5NewsByCategoryFrom: "Top 5 news by category from",
      topNews: "Top news"
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: true, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
