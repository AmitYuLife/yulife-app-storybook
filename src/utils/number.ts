import { getCurrentLocale } from "@locale";

export function padNum(x: number, sliceIndex: number = -2) {
  return `0${x}`.slice(sliceIndex);
}

export function addCommasToNumber(x: number) {
  return (x || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatNumber(text: string, maximumFractionDigits = 2) {
  const [integerPart, decimalPart] = text.split(".") || [];

  const formattedInteger = Intl.NumberFormat(getCurrentLocale(), { style: "decimal" }).format(Number(integerPart));

  // allow user to input a decimal point with decimal part as empty string
  // if max fraction digits is 0, return the integer part only
  if (decimalPart !== undefined && maximumFractionDigits > 0) {
    // user might want to input 01-09 as decimal part
    if (["0", ""].includes(decimalPart)) {
      return `${formattedInteger}.${decimalPart}`;
    }

    return Intl.NumberFormat(getCurrentLocale(), { style: "decimal", maximumFractionDigits }).format(Number(text));
  }

  return formattedInteger;
}
