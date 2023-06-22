import { Card } from "react-daisyui";
import { useServer } from "../../../../providers/server/server-provider";
import { useForm } from "../../../../hooks/common/form/use-form";
import { IsString } from "../../../../decorators/validation/basic/string/is-string.decorator";
import Form from "../../../common/form/form";
import TextFormItem from "../../../common/form/items/text-form-item";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../utils/i18n/i18n-setup.util";
import { IsNotEmpty } from "../../../../decorators/validation/basic/string/is-not-empty.decorator";
import SubmitButton from "../../../common/form/submit-button";

export default function ServerSetup() {
  const { setServer } = useServer();

  const form = useForm({
    validationTarget: new FormModel(),
    onSubmit: async ({ host }) => setServer({ host }),
  });
  const { t } = useTranslation(Translations.platform);

  return (
    <Card className="bg-neutral-focus">
      <Card.Body>
        <Form form={form} i18n={{ t, path: "serverConfiguration.form.fields" }}>
          <TextFormItem<FormModel>
            formItem={{
              name: "host",
            }}
          />
          <SubmitButton text={t("serverConfiguration.form.Submit")} />
        </Form>
      </Card.Body>
    </Card>
  );
}

class FormModel {
  @IsString()
  @IsNotEmpty()
  host!: string;
}
