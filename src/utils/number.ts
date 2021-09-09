export function padNum(x: number, sliceIndex: number = -2) {
  return `0${x}`.slice(sliceIndex);
}

export function addCommasToNumber(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
