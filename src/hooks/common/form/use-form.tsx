import { useState } from "react";
import { FormValues } from "../../../components/common/form/form";
import { validate as cvValidate } from "class-validator";
import { useLoading } from "../loading/use-loading";

type Options<T extends FormValues> = {
  onSubmit?: (values: T) => Promise<void>;
  initialValues?: Partial<T>;
  validationTarget?: T;
};

export type FormErrorValues = Record<string, string | number>;
export type FormError = {
  errorKey: string;
  args?: FormErrorValues;
};

export function useForm<T extends FormValues>(
  options: Options<T> = {}
): IUseForm<T> {
  // Loading
  const { isLoading, setLoading } = useLoading();

  // Form state
  const [formState, setFormState] = useState<Partial<T>>(
    options.initialValues ?? {}
  );

  const [errorsState, setErrorsState] = useState(
    {} as Record<keyof T, FormError[]>
  );

  const validate = async () => {
    if (options.validationTarget) {
      const errors = await cvValidate(
        Object.assign(options.validationTarget as Object, formState)
      );

      const errorsObject = {} as Record<keyof T, FormError[]>;
      for (const error of errors) {
        errorsObject[error.property as keyof T] = Object.values(
          error.constraints as Record<string, string>
        ).map((v) => {
          const err = JSON.parse(v) as {
            key: string;
            args?: FormErrorValues;
          };
          return {
            errorKey: err.key,
            args: err.args,
          };
        });
      }

      // Update state
      setErrorsState(errorsObject);

      // Validation failed as errors happened
      if (Object.keys(errorsObject).length > 0) return false;
    }

    // All nice and smooth 😀
    return true;
  };

  // On form is submitted
  const submit = async () => {
    setLoading(true);
    try {
      // Vaalidate fields
      if (!validate()) return;

      // Execute submit function
      if (options.onSubmit && formState) await options.onSubmit(formState as T);
    } finally {
      setLoading(false);
    }
  };

  return {
    formState,
    setFormState,
    submit,
    validate,
    errorsState,
    setErrorsState,
    isLoading,
  };
}

export interface IUseForm<T extends FormValues> {
  formState: Partial<T>;
  setFormState: (formState: Partial<T>) => void;
  submit: () => Promise<void>;
  validate: () => Promise<boolean>;
  errorsState: Record<keyof T, FormError[]>;
  setErrorsState: (errorsState: Record<keyof T, FormError[]>) => void;
  isLoading: boolean;
}
