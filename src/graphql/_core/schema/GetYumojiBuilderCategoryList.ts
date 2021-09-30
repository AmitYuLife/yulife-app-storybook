/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { YumojiBuilderItemMatchType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYumojiBuilderCategoryList
// ====================================================

export interface GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList_icon {
  id: string;
  uri: string | null;
}

export interface GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList_selectedIcon {
  id: string;
  uri: string | null;
}

export interface GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList_children_icon {
  id: string;
  uri: string | null;
}

export interface GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList_children_selectedIcon {
  id: string;
  uri: string | null;
}

export interface GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList_children {
  id: string;
  icon: GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList_children_icon;
  selectedIcon: GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList_children_selectedIcon;
  variantsOfPart: string | null;
  previewZoom: number | null;
  previewTop: number | null;
  previewLeft: number | null;
  matchType: YumojiBuilderItemMatchType;
  emptyMessage: string | null;
}

export interface GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList {
  id: string;
  icon: GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList_icon;
  selectedIcon: GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList_selectedIcon;
  variantsOfPart: string | null;
  previewZoom: number | null;
  previewTop: number | null;
  previewLeft: number | null;
  matchType: YumojiBuilderItemMatchType;
  children: GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList_children[] | null;
}

export interface GetYumojiBuilderCategoryList {
  /**
   * Gets all the categories to display in the scroller for the yumoji builder
   */
  getYumojiBuilderCategoryList: GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList[];
}
