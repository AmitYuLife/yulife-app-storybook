/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemList
// ====================================================

export interface ContentItemList_wrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemList_items_text {
  value: string;
  colour: string;
}

export interface ContentItemList_items_circle {
  colour: string;
  backgroundColour: string;
}

export interface ContentItemList_items_styles {
  property: string;
  value: string;
}

export interface ContentItemList_items {
  id: string;
  text: ContentItemList_items_text;
  circle: ContentItemList_items_circle;
  styles: ContentItemList_items_styles[] | null;
}

export interface ContentItemList {
  id: string;
  wrapperStyles: ContentItemList_wrapperStyles[] | null;
  items: ContentItemList_items[];
}
