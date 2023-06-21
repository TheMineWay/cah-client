import { useState } from "react";

type Options<T extends Object> = {
  onSubmit?: (values: T) => Promise<void>;
  initialValues?: T;
};

export function useForm<T extends Object>(
  options: Options<T> = {}
): IUseForm<T> {
  // Form state
  const [formState, setFormState] = useState<T | undefined>(
    options.initialValues
  );

  // On form is submitted
  const submit = async () => {
    // TODO: loading
    if (options.onSubmit && formState) await options.onSubmit(formState);
  };

  return {
    formState,
    setFormState,
    submit,
  };
}

export interface IUseForm<T extends Object> {
  formState?: T;
  setFormState: (formState: T) => void;
  submit: () => Promise<void>;
}
