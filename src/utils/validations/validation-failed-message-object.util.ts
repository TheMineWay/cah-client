export function validationFailedMessageObjectGenerator(
  messageKey: string,
  messageArgs?: Record<string, string | number>
) {
  return () =>
    JSON.stringify({
      key: messageKey,
      args: messageArgs,
    });
}
