import { IUseForm } from "../../../hooks/common/form/use-form";

type FormTypes = string | number;

type Props<T extends Object> = {
  children: JSX.Element | JSX.Element[];
  form: IUseForm<T>;
};

export default function Form<T extends Record<string, FormTypes>>({
  children,
}: Props<T>) {
  return <div>{children}</div>;
}
