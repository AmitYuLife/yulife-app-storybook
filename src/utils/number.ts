export const roundSecondsToNearestMinute = (seconds: number): number => Math.ceil(seconds / 60) * 60;

export function padNum(x: number, sliceIndex: number = -2) {
  return `0${x}`.slice(sliceIndex);
}

export function addCommasToNumber(x: number) {
  return (x || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatNumber(
  text: string,
  locale: string | string[],
  options?: { style: Intl.NumberFormatOptions["style"]; maximumFractionDigits?: number }
) {
  // default maximumFractionDigits is 3
  const { maximumFractionDigits = 3, style } = options || {};
  const digits = truncateNumberValue(text, maximumFractionDigits);

  const formatter = Intl.NumberFormat(locale, { style, maximumFractionDigits });

  return formatter.format(Number(digits));
}

/**
 * @param value stringified number with punctuations stripped
 * @param maximumFractionDigits maximum number of decimal places to keep
 */
export const truncateNumberValue = (value: string, maximumFractionDigits: number) => {
  const regex = new RegExp(`^-?\\d+(?:\\.\\d{0,${maximumFractionDigits}})?`);
  const firstMatch = value.match(regex)?.[0];

  if (!firstMatch) {
    return Number(value).toString();
  }

  // if last character is just decimal point, remove the decimal point.
  return firstMatch.endsWith(".") ? firstMatch.slice(0, firstMatch.length - 1) : firstMatch;
};
