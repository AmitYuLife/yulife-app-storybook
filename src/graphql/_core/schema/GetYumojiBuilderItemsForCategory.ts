/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AvatarBodyType, AvatarPartType, YumojiPartStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYumojiBuilderItemsForCategory
// ====================================================

export interface GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_parts_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_parts {
  partId: string;
  partType: string;
  order: number;
  colorSchemeId: string | null;
  hidesPartTypes: AvatarPartType[] | null;
  categoryId: string | null;
  remoteUrl: GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_parts_remoteUrl | null;
}

export interface GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_preview_image {
  id: string;
  uri: string | null;
}

export interface GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_preview_transform {
  left: number | null;
  top: number | null;
  zoom: number | null;
  height: number | null;
  width: number | null;
}

export interface GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_preview {
  image: GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_preview_image;
  transform: GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_preview_transform | null;
}

export interface GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_label_icon {
  id: string;
  uri: string | null;
}

export interface GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_label {
  text: string;
  icon: GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_label_icon;
  labelColor: string | null;
  backgroundColor: string | null;
  borderColor: string | null;
}

export interface GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_modal {
  title: string;
  message: string;
  cta: string | null;
  ctaText: string | null;
}

export interface GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items {
  parts: GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_parts[];
  representativeColor: string | null;
  preview: GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_preview | null;
  status: YumojiPartStatus;
  statusIcon: string | null;
  label: GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_label | null;
  modal: GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_modal | null;
}

export interface GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory {
  title: string;
  items: GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items[];
}

export interface GetYumojiBuilderItemsForCategory {
  /**
   * Gets all yumoji items that should be displayed in the list under a category in the yumoji builder
   */
  getYumojiBuilderItemsForCategory: GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory;
}

export interface GetYumojiBuilderItemsForCategoryVariables {
  categoryId: string;
  bodyType: AvatarBodyType;
  partId?: string | null;
  colorSchemeId?: string | null;
}
