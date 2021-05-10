/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { YuProductStatus, CoverType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenProductSlot
// ====================================================

export interface YuScreenProductSlot_slot1_icon {
  name: string;
  backgroundUrl: string;
}

export interface YuScreenProductSlot_slot1_toolTip_benefit {
  value: string;
  description: string;
}

export interface YuScreenProductSlot_slot1_toolTip_description {
  short: string;
  long: string | null;
}

export interface YuScreenProductSlot_slot1_toolTip {
  name: string;
  /**
   * Uses markdown
   */
  disclaimer: string | null;
  benefit: YuScreenProductSlot_slot1_toolTip_benefit;
  itemUrl: string;
  description: YuScreenProductSlot_slot1_toolTip_description;
}

export interface YuScreenProductSlot_slot1 {
  itemUrl: string;
  status: YuProductStatus;
  earnRate: number;
  productId: string | null;
  coverType: CoverType | null;
  icon: YuScreenProductSlot_slot1_icon;
  toolTip: YuScreenProductSlot_slot1_toolTip;
}

export interface YuScreenProductSlot_slot2_icon {
  name: string;
  backgroundUrl: string;
}

export interface YuScreenProductSlot_slot2_toolTip_benefit {
  value: string;
  description: string;
}

export interface YuScreenProductSlot_slot2_toolTip_description {
  short: string;
  long: string | null;
}

export interface YuScreenProductSlot_slot2_toolTip {
  name: string;
  /**
   * Uses markdown
   */
  disclaimer: string | null;
  benefit: YuScreenProductSlot_slot2_toolTip_benefit;
  itemUrl: string;
  description: YuScreenProductSlot_slot2_toolTip_description;
}

export interface YuScreenProductSlot_slot2 {
  itemUrl: string;
  status: YuProductStatus;
  earnRate: number;
  productId: string | null;
  coverType: CoverType | null;
  icon: YuScreenProductSlot_slot2_icon;
  toolTip: YuScreenProductSlot_slot2_toolTip;
}

export interface YuScreenProductSlot_slot3_icon {
  name: string;
  backgroundUrl: string;
}

export interface YuScreenProductSlot_slot3_toolTip_benefit {
  value: string;
  description: string;
}

export interface YuScreenProductSlot_slot3_toolTip_description {
  short: string;
  long: string | null;
}

export interface YuScreenProductSlot_slot3_toolTip {
  name: string;
  /**
   * Uses markdown
   */
  disclaimer: string | null;
  benefit: YuScreenProductSlot_slot3_toolTip_benefit;
  itemUrl: string;
  description: YuScreenProductSlot_slot3_toolTip_description;
}

export interface YuScreenProductSlot_slot3 {
  itemUrl: string;
  status: YuProductStatus;
  earnRate: number;
  productId: string | null;
  coverType: CoverType | null;
  icon: YuScreenProductSlot_slot3_icon;
  toolTip: YuScreenProductSlot_slot3_toolTip;
}

export interface YuScreenProductSlot_slot4_icon {
  name: string;
  backgroundUrl: string;
}

export interface YuScreenProductSlot_slot4_toolTip_benefit {
  value: string;
  description: string;
}

export interface YuScreenProductSlot_slot4_toolTip_description {
  short: string;
  long: string | null;
}

export interface YuScreenProductSlot_slot4_toolTip {
  name: string;
  /**
   * Uses markdown
   */
  disclaimer: string | null;
  benefit: YuScreenProductSlot_slot4_toolTip_benefit;
  itemUrl: string;
  description: YuScreenProductSlot_slot4_toolTip_description;
}

export interface YuScreenProductSlot_slot4 {
  itemUrl: string;
  status: YuProductStatus;
  earnRate: number;
  productId: string | null;
  coverType: CoverType | null;
  icon: YuScreenProductSlot_slot4_icon;
  toolTip: YuScreenProductSlot_slot4_toolTip;
}

export interface YuScreenProductSlot {
  slot1: YuScreenProductSlot_slot1;
  slot2: YuScreenProductSlot_slot2;
  slot3: YuScreenProductSlot_slot3;
  slot4: YuScreenProductSlot_slot4;
}
