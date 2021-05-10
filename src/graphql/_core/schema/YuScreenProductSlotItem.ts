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

export interface YuScreenProductSlotItem_toolTip_benefit {
  value: string;
  description: string;
}

export interface YuScreenProductSlotItem_toolTip_description {
  short: string;
  long: string | null;
}

export interface YuScreenProductSlotItem_toolTip {
  name: string;
  /**
   * Uses markdown
   */
  disclaimer: string | null;
  benefit: YuScreenProductSlotItem_toolTip_benefit;
  itemUrl: string;
  description: YuScreenProductSlotItem_toolTip_description;
}

export interface YuScreenProductSlotItem {
  itemUrl: string;
  status: YuProductStatus;
  earnRate: number;
  productId: string | null;
  coverType: CoverType | null;
  icon: YuScreenProductSlotItem_icon;
  toolTip: YuScreenProductSlotItem_toolTip;
}
