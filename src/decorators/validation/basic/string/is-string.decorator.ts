import { isString, ValidateBy, ValidationOptions } from "class-validator";
import { validationFailedMessageObjectGenerator } from "../../../../utils/validations/validation-failed-message-object.util";

export function IsString(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: "is-string",
      constraints: [],
      validator: {
        validate: (value): boolean => isString(value),
        defaultMessage: validationFailedMessageObjectGenerator("not-string"),
      },
    },
    validationOptions
  );
}
