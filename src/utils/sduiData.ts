export const buildInitialSduiStepDynamicDataState = (stepData: string) => {
  if (!stepData) {
    return {};
  }

  try {
    const data = JSON.parse(stepData);

    if (data && typeof data === "object") {
      return data;
    }

    return {};
  } catch {
    return {};
  }
};
