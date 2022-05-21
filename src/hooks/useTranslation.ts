import { useMemo } from "react";
import { translate, getLocale } from "@locale";

export function useTranslation<T extends string>(keys: T[]) {
  const data = useMemo(() => keys.reduce((acc, key) => ({ ...acc, [key]: translate(key) }), {} as Record<T, string>), [
    keys.length,
    getLocale(),
  ]);

  return data;
}
