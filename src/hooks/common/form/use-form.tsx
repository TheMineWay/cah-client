import { useState } from "react";
import { FormValues } from "../../../components/common/form/form";

type Options<T extends FormValues> = {
  onSubmit?: (values: T) => Promise<void>;
  initialValues?: Partial<T>;
};

export function useForm<T extends FormValues>(
  options: Options<T> = {}
): IUseForm<T> {
  // Form state
  const [formState, setFormState] = useState<Partial<T>>(
    options.initialValues ?? {}
  );

  // On form is submitted
  const submit = async () => {
    // TODO: loading
    if (options.onSubmit && formState) await options.onSubmit(formState as T);
  };

  return {
    formState,
    setFormState,
    submit,
  };
}

export interface IUseForm<T extends FormValues> {
  formState: Partial<T>;
  setFormState: (formState: Partial<T>) => void;
  submit: () => Promise<void>;
}
