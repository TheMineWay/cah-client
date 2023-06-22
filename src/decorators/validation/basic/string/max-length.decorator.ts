import { maxLength, ValidateBy, ValidationOptions } from "class-validator";
import { validationFailedMessageObjectGenerator } from "../../../../utils/validations/validation-failed-message-object.util";

export function MaxLength(
  max: number,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: "max-length",
      constraints: [],
      validator: {
        validate: (value): boolean => maxLength(value, max),
        defaultMessage: validationFailedMessageObjectGenerator("max-length", {
          max,
        }),
      },
    },
    validationOptions
  );
}
