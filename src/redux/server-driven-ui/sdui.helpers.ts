type ParsedJson = {
  isValid: boolean;
  data?: Record<string, any>;
};

export function parseJSON(payload: string, expectedKeys: string[] = []): ParsedJson {
  try {
    const data = JSON.parse(payload);

    const isValid = !expectedKeys.length
      ? true
      : expectedKeys.every((key) => data[key] && typeof data[key] === "string");

    return {
      isValid,
      data,
    };
  } catch (e) {
    return { isValid: false };
  }
}
