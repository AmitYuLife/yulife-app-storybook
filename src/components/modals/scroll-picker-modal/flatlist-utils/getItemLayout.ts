import { ITEM_HEIGHT } from "../scroll-picker.styles";
import { IListItem } from "./types";

export const getItemLayout = (data: Array<IListItem> | null | undefined, index: number) => {
  const offset = ITEM_HEIGHT * index;

  if (!data) {
    return { length: 0, offset, index };
  }

  return { length: ITEM_HEIGHT, offset, index };
};
