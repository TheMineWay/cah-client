import { IUseForm } from "../../../hooks/common/form/use-form";
import FormProvider from "../../../providers/form/form-provider";

export type FormValues = Object;

type Props<T extends FormValues> = {
  children: JSX.Element | JSX.Element[];
  form: IUseForm<T>;
};

export default function Form<T extends FormValues>({
  children,
  form,
}: Props<T>) {
  return (
    <FormProvider form={form}>
      <>{children}</>
    </FormProvider>
  );
}
