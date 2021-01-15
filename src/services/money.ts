export const formatMoney = (amount: number) => {
  return amount % 1 === 0 ? String(amount) : amount.toFixed(2);
};
