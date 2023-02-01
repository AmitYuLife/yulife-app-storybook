export const formatNumber = (num: number, decimalPlaces: number) => {
  return `${Number(num.toFixed(2)).toLocaleString('en', {
      minimumFractionDigits: decimalPlaces
      }
  )}`
}