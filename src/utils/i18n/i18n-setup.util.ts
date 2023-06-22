import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// en_US
import en_US_layout from "../../locales/en_US/platform/layout.json";
import en_US_authentication from "../../locales/en_US/authentication/auth.json";
import en_US_formValidation from "../../locales/en_US/form/validation.json";
import en_US_platform from "../../locales/en_US/platform/platform.json";

export const setupI18n = () => {
  const resources = {
    [Languages.en_US]: {
      [Translations.layout]: en_US_layout,
      [Translations.authentication]: en_US_authentication,
      [Translations.formValidation]: en_US_formValidation,
      [Translations.platform]: en_US_platform,
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
  authentication = "authentication",
  formValidation = "formValidation",
  platform = "platform",
}
