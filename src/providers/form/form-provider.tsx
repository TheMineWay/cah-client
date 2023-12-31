import { createContext, useContext } from "react";
import { IUseForm } from "../../hooks/common/form/use-form";
import { ProviderException } from "../../errors/providers/provider.exception";
import { FormValues } from "../../components/common/form/form";
import { I18n } from "../../types/common/i18n.type";

const FormContext = createContext<FormProviderType | null>(null);

type Props<T extends FormValues> = {
  children: JSX.Element;
  form: IUseForm<T>;
  i18n?: I18n;
};

export default function FormProvider<T extends FormValues>({
  children,
  form,
  i18n,
}: Props<T>) {
  return (
    <FormContext.Provider
      value={{
        form,
        i18n,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormProvider = () => {
  const context = useContext(FormContext);

  if (!context) throw new ProviderException();

  return context;
};

export const useFormProviderAsFormItem = (name: string) => {
  const context = useFormProvider();

  const setValue = (value: unknown) => {
    context.form.setFormState({
      ...context.form.formState,
      [name]: value,
    });
  };

  const value = context.form.formState ? context.form.formState[name] : null;

  const errors = context.form.errorsState ? context.form.errorsState[name] : [];

  return {
    ...context,
    setValue,
    value,
    errors,
  };
};

interface FormProviderType {
  // It cannot be known
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: IUseForm<any>;

  i18n?: I18n;
}
