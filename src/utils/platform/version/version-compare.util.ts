import { ComparisonResult } from "../../../types/basic/comparison/comparison-result.enum";
import { normalizeVersions } from "./normalize-versions.util";

export const compareVersions = (
  version: number[],
  compareVersion: number[]
) => {
  const [originalVersion, versionToCompare] = normalizeVersions([
    version,
    compareVersion,
  ]);

  for (let i = 0; i < originalVersion.length; i++) {
    if (originalVersion[i] > versionToCompare[i])
      return ComparisonResult.GREATER;
    if (originalVersion[i] < versionToCompare[i]) return ComparisonResult.LESS;
  }
  return ComparisonResult.EQUALS;
};
