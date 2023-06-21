import { IUseForm } from "../../../hooks/common/form/use-form";
import FormProvider from "../../../providers/form/form-provider";
import { I18n } from "../../../types/common/i18n.type";

export type FormValues = Object;

type Props<T extends FormValues> = {
  children: JSX.Element | JSX.Element[];
  form: IUseForm<T>;

  i18n?: I18n;
};

export default function Form<T extends FormValues>({
  children,
  form,
  i18n,
}: Props<T>) {
  return (
    <FormProvider form={form} i18n={i18n}>
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();

          form.submit();
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
}
