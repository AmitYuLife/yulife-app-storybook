const formatMoney = (amount: number) => {
    return amount % 1 === 0 ? String(amount) : amount.toFixed(2);
};

export const renderValue = (num: number, currencyType: string) => {
    switch (currencyType) {
        case "AVIOS":
            return `${formatMoney(num)} avios`;
        case "LINK":
            return `free trial`;
        default:
            return `£${formatMoney(num)} voucher`;
    }
};

export const renderExchange = (num: number, currencyType: string) => {
    switch (currencyType) {
        case "AVIOS":
            return `yucoin x ${num} up`;
        case "LINK":
            return `yucoin x 0`;
        default:
            return `yucoin x ${num}`;
    }
};
