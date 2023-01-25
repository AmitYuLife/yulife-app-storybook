export function get<T, P, S>(obj: T, path: string, defaultValue: P) {
  if (!path) {
    return defaultValue;
  }

  return path.split(".").reduce((tempObj: any, key: string) => tempObj?.[key] || defaultValue, obj) as S;
}
