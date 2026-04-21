import { useMemo } from "react";
import { translate, getCurrentLocale } from "@locale";

export function useTranslation<T extends string>(keys: T[]) {
  const locale = getCurrentLocale();
  const data = useMemo(
    () => keys.reduce((acc, key) => ({ ...acc, [key]: translate(key) }), {} as Record<T, string>),
    [keys.length, locale]
  );

  return data;
}
