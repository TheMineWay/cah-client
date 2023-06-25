export const normalizeVersions = (versions: number[][]) => {
  let max = 0;
  for (const version of versions) {
    if (version.length > max) max = version.length;
  }

  return versions.map((version) => {
    while (version.length < max) {
      version.unshift(0);
    }
    return version;
  });
};
