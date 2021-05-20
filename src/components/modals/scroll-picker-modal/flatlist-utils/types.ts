export enum LIST_ITEM {
  ITEM = "ITEM",
  PLACEHOLDER = "PLACEHOLDER",
}

export interface IListPlaceholder {
  type: LIST_ITEM.PLACEHOLDER;
  data: string;
}

export interface IListItemItem {
  type: LIST_ITEM.ITEM;
  data: Item;
}

export type IListItem = IListPlaceholder | IListItemItem;

export interface Item {
  label: string;
  value: string | number;
}
