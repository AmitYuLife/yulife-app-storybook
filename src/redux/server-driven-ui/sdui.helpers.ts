import { SduiActionWithServerPayload } from "./sdui.types";

type ParsedJson<T> = {
  isValid: boolean;
  data: T;
};

export function parseJSON<T = Record<string, any>>(payload: string, expectedKeys: string[] = []): ParsedJson<T> {
  try {
    const data = JSON.parse(payload) || {};

    const isValid = !expectedKeys.length
      ? true
      : expectedKeys.every((key) => data[key] && typeof data[key] === "string");

    return {
      isValid,
      data,
    };
  } catch (e) {
    return { data: {} as T, isValid: false };
  }
}

export function getServerPayload(payload: unknown) {
  const type = typeof payload;

  if (type === "object" && !!payload) {
    return (payload as SduiActionWithServerPayload["payload"])?.serverPayload;
  }

  if (type === "string") {
    return payload as string;
  }

  return "";
}
