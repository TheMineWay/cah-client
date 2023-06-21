import { InputProps } from "react-daisyui";

export type FormItemProps<T extends Object = InputProps> = {
  props?: T;
  formItem: Omit<FormItemOptions, "children">;
};

type FormItemOptions = {
  name: string;
  label?: string;
  children: JSX.Element | JSX.Element[];
};

export default function FormItem({ children, label }: FormItemOptions) {
  return (
    <div>
      {label && <label>{label}</label>}
      <div>{children}</div>
    </div>
  );
}
