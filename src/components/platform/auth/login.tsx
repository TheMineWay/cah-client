import { useTranslation } from "react-i18next";
import { useForm } from "../../../hooks/common/form/use-form";
import Form from "../../common/form/form";
import TextFormItem from "../../common/form/items/text-form-item";
import { Translations } from "../../../utils/i18n/i18n-setup.util";
import PasswordFormItem from "../../common/form/items/password-form-item";
import SubmitButton from "../../common/form/submit-button";
import { IsString } from "class-validator";

export default function Login() {
  const { t } = useTranslation([Translations.authentication]);

  const form = useForm<FormModel>();

  return (
    <Form form={form} i18n={{ t, path: "authPage.login.form.fields" }}>
      <TextFormItem<FormModel>
        formItem={{
          name: "nick",
        }}
      />
      <PasswordFormItem<FormModel>
        formItem={{
          name: "password",
        }}
      />
      <SubmitButton text={t("authPage.login.form.Submit")} />
    </Form>
  );
}

class FormModel {
  @IsString()
  nick!: string;
  @IsString()
  password!: string;
}
