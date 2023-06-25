import { ComparisonResult } from "../../../types/basic/comparison/comparison-result.enum";
import { compareVersions } from "./version-compare.util";

export const isVersionBetween = (
  version: number[],
  minVersion: number[],
  maxVersion: number[]
) => {
  if (compareVersions(version, minVersion) === ComparisonResult.LESS)
    return false;
  if (compareVersions(version, maxVersion) === ComparisonResult.GREATER)
    return false;
  return true;
};
