import { InputProps } from "react-daisyui";
import { FormValues } from "./form";
import { useFormProvider } from "../../../providers/form/form-provider";

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
  const { i18n, errors } = useFormProvider(name.toString());

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
      <div>{children}</div>
      {errors?.length > 0 && <div>{errors.join(".\n")}</div>}
    </div>
  );
}
