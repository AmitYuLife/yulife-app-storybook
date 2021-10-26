/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { YuProductStatus, CoverType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenProductSlotItem
// ====================================================

export interface YuScreenProductSlotItem_icon {
  name: string;
  backgroundUrl: string;
}

export interface YuScreenProductSlotItem_popover {
  id: string;
  message: string;
}

export interface YuScreenProductSlotItem {
  itemUrl: string;
  status: YuProductStatus;
  earnRate: number;
  productId: string | null;
  coverType: CoverType | null;
  icon: YuScreenProductSlotItem_icon;
  popover: YuScreenProductSlotItem_popover | null;
}
