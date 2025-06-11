import { getNumberGap, getNumberStyle, SCROLLING_NUMBER_GAP } from "./subcomponents/constants";

export const calculateBaseScrollOffset = (targetNumber: number, minNumber: number, displayWidth: number) => {
  const defaultNumberBoxWidth = getNumberStyle().width as number;
  const middleBoxLeft = displayWidth / 2 - defaultNumberBoxWidth / 2;
  const itemWidth = defaultNumberBoxWidth + SCROLLING_NUMBER_GAP;
  const offsetToTarget = (targetNumber - minNumber) * itemWidth;

  return middleBoxLeft - offsetToTarget;
};

export const calculateScrollOffset = (targetNumber: number, minNumber: number, displayWidth: number) => {
  const targetNumberBoxWidth = getNumberStyle(0).width as number;
  const middleBoxLeft = displayWidth / 2 - targetNumberBoxWidth / 2;

  let offset = middleBoxLeft;

  const itemsLeftOfTarget = Math.max(0, targetNumber - minNumber);
  for (let dist = 1; dist <= itemsLeftOfTarget; dist++) {
    const gap = getNumberGap(targetNumber - dist + 1, dist);
    const boxSize = getNumberStyle(dist).width as number;
    offset -= gap + boxSize;
  }

  return offset;
};

export const getMarginLeft = (value: number, currentTarget: number) => {
  const distance = Math.abs(currentTarget - value);
  const distanceCorrection = value > currentTarget ? -1 : 0;

  const distanceToUse = distance + distanceCorrection + 1;
  return getNumberGap(value <= currentTarget ? value : value - 1, distanceToUse);
};
