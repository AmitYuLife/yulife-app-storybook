/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProductSlotItemBackgroundUrls
// ====================================================

export interface GetProductSlotItemBackgroundUrls_getProductSlotItemBackgroundUrls_image {
  id: string;
  uri: string | null;
}

export interface GetProductSlotItemBackgroundUrls_getProductSlotItemBackgroundUrls {
  coverType: CoverType;
  image: GetProductSlotItemBackgroundUrls_getProductSlotItemBackgroundUrls_image;
}

export interface GetProductSlotItemBackgroundUrls {
  getProductSlotItemBackgroundUrls: GetProductSlotItemBackgroundUrls_getProductSlotItemBackgroundUrls[];
}
