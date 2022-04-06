import { ProductStepAction } from "./sdui.types";

type ParsedJson = {
  isValid: boolean;
  data: Record<string, any>;
};

export function parseJSON(payload: string, expectedKeys: string[] = []): ParsedJson {
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
    return { data: {}, isValid: false };
  }
}

export function getServerPayload(payload: unknown) {
  const type = typeof payload;

  if (type === "object" && !!payload) {
    return (payload as ProductStepAction["payload"])?.serverPayload;
  }

  if (type === "string") {
    return payload as string;
  }

  return "";
}
