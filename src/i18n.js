import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const i18nConfig = {
  compatibilityJSON: "v3",
  fallbackLng: "en",
  returnObjects: true,
  detection: {
    order: [
      "cookie",
      "htmlTag",
      "localStorage",
      "sessionStorage",
      "navigator",
      "path",
      "subdomain",
    ],
    caches: ["cookie"],
  },
  backend: {
    // ensure translations are loaded from the correct base when app is served
    // from a subpath (e.g. GitHub Pages). Vite exposes the base as
    // `import.meta.env.BASE_URL` (e.g. "/e-commerce-main/").
    loadPath:
      (import.meta.env.BASE_URL || "/") + "locale/{{lng}}/{{ns}}.json",
  },
};

i18n.use(initReactI18next).use(LanguageDetector).use(HttpApi).init(i18nConfig);

export default i18n;
