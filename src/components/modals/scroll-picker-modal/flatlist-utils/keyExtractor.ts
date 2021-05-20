import { IListItem, LIST_ITEM } from "./types";

export const keyExtractor = (item: IListItem) => {
  if (item.type === LIST_ITEM.PLACEHOLDER) {
    return `placeholder-${item.data}`;
  }

  return typeof item.data?.value === "string" ? item.data.value : `${item.data.value}`;
};
