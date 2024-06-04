import { NUDGE_ITEM_MARGIN, NUDGE_ITEM_WIDTH } from "../nudge-item/styles";

export const getSnapToOffsets = (dataLength = 0) => [
  ...Array.from({ length: Math.max(0, dataLength) }).map((_, i) => (NUDGE_ITEM_WIDTH + NUDGE_ITEM_MARGIN) * i),
];
