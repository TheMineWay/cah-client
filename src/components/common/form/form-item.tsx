import { InputProps } from "react-daisyui";
import { FormValues } from "./form";
import { useFormProviderAsFormItem } from "../../../providers/form/form-provider";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../utils/i18n/i18n-setup.util";
import styles from "./form-item.module.css";

export type FormItemProps<
  T extends FormValues,
  K extends Object = InputProps
> = {
  props?: K;
  formItem: Omit<FormItemOptions<T>, "children">;
};

type FormItemOptions<T extends FormValues> = {
  name: keyof T;
  label?: string | null;
  children: JSX.Element | JSX.Element[];
};

export default function FormItem<T extends FormValues>({
  children,
  label: rawLabel,
  name,
}: FormItemOptions<T>) {
  const { t } = useTranslation([Translations.formValidation]);

  const { i18n, errors } = useFormProviderAsFormItem(name.toString());

  const label =
    rawLabel === null
      ? null
      : rawLabel
      ? rawLabel
      : i18n
      ? i18n.t(`${i18n.path}.${name.toString()}.Label`)
      : undefined;

  return (
    <div className="grid gap-2">
      {label && <label>{label}</label>}
      <div className={styles.item}>{children}</div>
      {errors?.length > 0 && (
        <div>
          {errors.map((error) => (
            <p key={error.errorKey} className={styles.error}>
              {t(`errors.${error.errorKey}.Text`, error.args)}.
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
