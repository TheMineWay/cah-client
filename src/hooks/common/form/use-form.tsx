import { useState } from "react";
import { FormValues } from "../../../components/common/form/form";
import { validate as cvValidate } from "class-validator";

type Options<T extends FormValues> = {
  onSubmit?: (values: T) => Promise<void>;
  initialValues?: Partial<T>;
  validationTarget?: T;
};

export function useForm<T extends FormValues>(
  options: Options<T> = {}
): IUseForm<T> {
  // Form state
  const [formState, setFormState] = useState<Partial<T>>(
    options.initialValues ?? {}
  );

  const [errorsState, setErrorsState] = useState<
    Record<keyof T, string[]> | {}
  >({});

  const validate = async () => {
    if (options.validationTarget) {
      const errors = await cvValidate(
        Object.assign(options.validationTarget as Object, formState)
      );
      for (const error of errors) {
        console.log(error);
      }
    }
    return true;
  };

  // On form is submitted
  const submit = async () => {
    if (!validate()) return;

    // TODO: loading
    if (options.onSubmit && formState) await options.onSubmit(formState as T);
  };

  return {
    formState,
    setFormState,
    submit,
    validate,
    errorsState,
    setErrorsState,
  };
}

export interface IUseForm<T extends FormValues> {
  formState: Partial<T>;
  setFormState: (formState: Partial<T>) => void;
  submit: () => Promise<void>;
  validate: () => Promise<boolean>;
  errorsState: Record<keyof T, string[]> | {};
  setErrorsState: (errorsState: Record<keyof T, string[]> | {}) => void;
}
