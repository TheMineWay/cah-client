import { InputProps } from "react-daisyui";
import { FormValues } from "./form";

export type FormItemProps<
  T extends FormValues,
  K extends Object = InputProps
> = {
  props?: K;
  formItem: Omit<FormItemOptions<T>, "children">;
};

type FormItemOptions<T extends FormValues> = {
  name: keyof T;
  label?: string;
  children: JSX.Element | JSX.Element[];
};

export default function FormItem<T extends FormValues>({
  children,
  label,
}: FormItemOptions<T>) {
  return (
    <div>
      {label && <label>{label}</label>}
      <div>{children}</div>
    </div>
  );
}
