import { minLength, ValidateBy, ValidationOptions } from "class-validator";
import { validationFailedMessageObjectGenerator } from "../../../../utils/validations/validation-failed-message-object.util";

export function MinLength(
  min: number,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: "min-length",
      constraints: [],
      validator: {
        validate: (value): boolean => minLength(value, min),
        defaultMessage: validationFailedMessageObjectGenerator("min-length", {
          min,
        }),
      },
    },
    validationOptions
  );
}
