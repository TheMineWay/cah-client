import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// en_US
import en_US_layout from "../../locales/en_US/platform/layout.json";

export const setupI18n = () => {
  const resources = {
    [Languages.en_US]: {
      [Translations.layout]: en_US_layout,
    },
  };

  i18n.use(initReactI18next).init({
    resources,
    lng: Languages.en_US,
    fallbackLng: Languages.en_US,
  });
};

export enum Languages {
  en_US = "en_US",
}

export enum Translations {
  layout = "layout",
  login = "login",
}
