import { isNotEmpty, ValidateBy, ValidationOptions } from "class-validator";
import { validationFailedMessageObjectGenerator } from "../../../../utils/validations/validation-failed-message-object.util";

export function IsNotEmpty(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: "is-not-empty",
      constraints: [],
      validator: {
        validate: (value): boolean => isNotEmpty(value),
        defaultMessage: validationFailedMessageObjectGenerator("is-empty"),
      },
    },
    validationOptions
  );
}
