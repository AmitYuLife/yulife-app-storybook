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
  colour: string;
}

export interface YuScreenProductSlot_slot1_badge_text {
  value: string;
  colour: string;
}

export interface YuScreenProductSlot_slot1_badge {
  badgeUrl: string;
  text: YuScreenProductSlot_slot1_badge_text | null;
}

export interface YuScreenProductSlot_slot1_popover {
  id: string;
  message: string;
}

export interface YuScreenProductSlot_slot1 {
  itemUrl: string;
  status: YuProductStatus;
  earnRate: number;
  productId: string | null;
  coverType: CoverType | null;
  icon: YuScreenProductSlot_slot1_icon;
  badge: YuScreenProductSlot_slot1_badge;
  popover: YuScreenProductSlot_slot1_popover | null;
}

export interface YuScreenProductSlot_slot2_icon {
  name: string;
  backgroundUrl: string;
  colour: string;
}

export interface YuScreenProductSlot_slot2_badge_text {
  value: string;
  colour: string;
}

export interface YuScreenProductSlot_slot2_badge {
  badgeUrl: string;
  text: YuScreenProductSlot_slot2_badge_text | null;
}

export interface YuScreenProductSlot_slot2_popover {
  id: string;
  message: string;
}

export interface YuScreenProductSlot_slot2 {
  itemUrl: string;
  status: YuProductStatus;
  earnRate: number;
  productId: string | null;
  coverType: CoverType | null;
  icon: YuScreenProductSlot_slot2_icon;
  badge: YuScreenProductSlot_slot2_badge;
  popover: YuScreenProductSlot_slot2_popover | null;
}

export interface YuScreenProductSlot_slot3_icon {
  name: string;
  backgroundUrl: string;
  colour: string;
}

export interface YuScreenProductSlot_slot3_badge_text {
  value: string;
  colour: string;
}

export interface YuScreenProductSlot_slot3_badge {
  badgeUrl: string;
  text: YuScreenProductSlot_slot3_badge_text | null;
}

export interface YuScreenProductSlot_slot3_popover {
  id: string;
  message: string;
}

export interface YuScreenProductSlot_slot3 {
  itemUrl: string;
  status: YuProductStatus;
  earnRate: number;
  productId: string | null;
  coverType: CoverType | null;
  icon: YuScreenProductSlot_slot3_icon;
  badge: YuScreenProductSlot_slot3_badge;
  popover: YuScreenProductSlot_slot3_popover | null;
}

export interface YuScreenProductSlot_slot4_icon {
  name: string;
  backgroundUrl: string;
  colour: string;
}

export interface YuScreenProductSlot_slot4_badge_text {
  value: string;
  colour: string;
}

export interface YuScreenProductSlot_slot4_badge {
  badgeUrl: string;
  text: YuScreenProductSlot_slot4_badge_text | null;
}

export interface YuScreenProductSlot_slot4_popover {
  id: string;
  message: string;
}

export interface YuScreenProductSlot_slot4 {
  itemUrl: string;
  status: YuProductStatus;
  earnRate: number;
  productId: string | null;
  coverType: CoverType | null;
  icon: YuScreenProductSlot_slot4_icon;
  badge: YuScreenProductSlot_slot4_badge;
  popover: YuScreenProductSlot_slot4_popover | null;
}

export interface YuScreenProductSlot {
  slot1: YuScreenProductSlot_slot1;
  slot2: YuScreenProductSlot_slot2;
  slot3: YuScreenProductSlot_slot3;
  slot4: YuScreenProductSlot_slot4;
}
