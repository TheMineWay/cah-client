import { VersionParseException } from "../../../errors/platform/version/version-parse.exception";

export const versionParse = (version: string) =>
  version
    .trim()
    .split(".")
    .map((n) => {
      const num = +n;

      if (typeof num !== "number" || isNaN(num))
        throw new VersionParseException();

      return num;
    });
