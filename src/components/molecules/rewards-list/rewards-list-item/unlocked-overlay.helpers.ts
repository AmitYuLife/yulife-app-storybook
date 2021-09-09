import { addCommasToNumber } from "@utils";

const formatMoney = (amount: number) => {
  return amount % 1 === 0 ? String(amount) : amount.toFixed(2);
};

export const renderValue = (num: number, currencyType: string, linkType?: string) => {
  switch (currencyType) {
    case "AVIOS":
      return `${formatMoney(num)} avios`;
    case "LINK":
      return linkType ? linkType : "free trial";
    default:
      return `£${formatMoney(num)} voucher`;
  }
};

export const renderExchange = (num: number, currencyType: string) => {
  switch (currencyType) {
    case "AVIOS":
      return `yucoin x ${addCommasToNumber(num)} up`;
    case "LINK":
      return "";
    default:
      return `yucoin x ${addCommasToNumber(num)}`;
  }
};
