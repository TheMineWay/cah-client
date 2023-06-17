import { useTranslation } from "react-i18next";
import { Translations } from "./utils/i18n/i18n-setup.util";

export default function App() {
  const { t } = useTranslation([Translations.layout]);

  return <>{t("test")}</>;
}
