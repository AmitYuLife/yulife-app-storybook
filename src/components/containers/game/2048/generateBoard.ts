import { BoardCell, GameValue } from "./game";
import { sampleSize, shuffle } from "lodash";

const VALUES_IN_ROW = 2;
const LOWEST_MAX_VALUE = 16;
const DUPLICATE_INDEX_MAP = [3, 2, 0];
export const ALL_GAME_VALUES: GameValue[] = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

export const generatePreviewBoard = (board: BoardCell[]): BoardCell[] => {
  const values = getValuesToDisplay(board);

  return values.map((value, idx) => ({
    id: `preview-${idx}`,
    x: Math.floor(idx / VALUES_IN_ROW),
    y: idx % VALUES_IN_ROW,
    value,
  }));
};

/**
 * Returns a shuffled list of values to display
 * Value 1 - max value of the board
 * Value 2, 3 - other 2 unique lower possible values
 * Value 4 - the lower of the Values 2 & 3
 *
 * Returned list when displayed in a grid will make sure cells with same value are not adjacent
 */
const getValuesToDisplay = (board: BoardCell[] = []): GameValue[] => {
  const maxValue: GameValue = Math.max(...board.map((x) => x.value), LOWEST_MAX_VALUE) as GameValue;

  if (maxValue === LOWEST_MAX_VALUE) {
    return [4, 2, 2, maxValue];
  }

  const otherPossibleValues = ALL_GAME_VALUES.filter((x) => x < maxValue);
  const otherValues = sampleSize(otherPossibleValues, 2);

  const possibleValues = [maxValue, ...otherValues];
  const lowestValue = Math.min(...possibleValues) as GameValue;

  const shuffledPossibleValues = shuffle(possibleValues);
  const lowestValueIndex = shuffledPossibleValues.indexOf(lowestValue);
  const lowestValueDuplicateIndex = DUPLICATE_INDEX_MAP[lowestValueIndex] || 0;

  shuffledPossibleValues.splice(lowestValueDuplicateIndex, 0, lowestValue);
  return shuffledPossibleValues as GameValue[];
};
