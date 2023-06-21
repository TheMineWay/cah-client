import { createContext, useContext } from "react";
import { IUseForm } from "../../hooks/common/form/use-form";
import { ProviderException } from "../../errors/providers/provider.exception";
import { FormValues } from "../../components/common/form/form";

const FormContext = createContext<FormProviderType | null>(null);

type Props<T extends FormValues> = {
  children: JSX.Element;
  form: IUseForm<T>;
};

export default function FormProvider<T extends FormValues>({
  children,
  form,
}: Props<T>) {
  return (
    <FormContext.Provider
      value={{
        form,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormProvider = () => {
  const context = useContext(FormContext);

  if (!context) throw new ProviderException();

  const setValue = (name: string, value: unknown) => {
    context.form.setFormState({
      ...context.form.formState,
      [name]: value,
    });
  };

  return {
    ...context,
    setValue,
  };
};

interface FormProviderType {
  // It cannot be known
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: IUseForm<any>;
}
