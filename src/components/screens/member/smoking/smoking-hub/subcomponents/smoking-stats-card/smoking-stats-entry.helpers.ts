export const extractNumericValue = (value: string): number => {
  "worklet";
  const match = value.match(/-?\d+(?:\.\d+)?/);
  return match ? parseFloat(match[0]) : 0;
};

export const formatAnimatedValue = (currentValue: number, originalString: string): string => {
  "worklet";
  const numericMatch = originalString.match(/-?\d+(?:\.\d+)?/);
  if (!numericMatch) {
    return originalString;
  }

  const originalNumber = numericMatch[0];
  const numericIndex = numericMatch.index!;

  const prefix = originalString.substring(0, numericIndex);
  const suffix = originalString.substring(numericIndex + originalNumber.length);

  const decimalPlaces = originalNumber.includes(".") ? originalNumber.split(".")[1].length : 0;

  const formattedNumber = decimalPlaces > 0 ? currentValue.toFixed(decimalPlaces) : Math.round(currentValue).toString();

  return `${prefix}${formattedNumber}${suffix}`;
};
