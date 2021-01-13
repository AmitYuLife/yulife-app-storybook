/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { YuProductId, ProductType, YuProductStatus, YuItemSlot, CoverType, YuWorld } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYulifer
// ====================================================

export interface GetYulifer_getYulifer_avatarRemoteFiles {
  __typename: "AvatarRemoteFiles";
  svgFull: string | null;
  pngFull: string | null;
  pngMini: string | null;
}

export interface GetYulifer_getYulifer {
  userId: string | null;
  earnRate: number | null;
  isAvatarCreated: boolean | null;
  avatarRemoteFiles: GetYulifer_getYulifer_avatarRemoteFiles | null;
}

export interface GetYulifer_personal_options_styles {
  world: YuWorld | null;
  name: string | null;
  icon: string | null;
  background: string | null;
  armor: string | null;
}

export interface GetYulifer_personal_options_powers {
  id: string | null;
  title: string | null;
  description: string | null;
  icon: string | null;
}

export interface GetYulifer_personal_options {
  type: CoverType | null;
  earnRate: number | null;
  heading: string | null;
  percentageCovered: number | null;
  styles: (GetYulifer_personal_options_styles | null)[] | null;
  powers: (GetYulifer_personal_options_powers | null)[] | null;
}

export interface GetYulifer_personal {
  productId: YuProductId | null;
  productType: ProductType | null;
  status: YuProductStatus | null;
  name: string | null;
  code: string | null;
  itemSlot: YuItemSlot | null;
  earnRate: number | null;
  description: string | null;
  options: (GetYulifer_personal_options | null)[] | null;
}

export interface GetYulifer_employer {
  productId: YuProductId | null;
  productType: ProductType | null;
  status: YuProductStatus | null;
  name: string | null;
  code: string | null;
  itemSlot: YuItemSlot | null;
  earnRate: number | null;
  description: string | null;
}

export interface GetYulifer_charms {
  productId: YuProductId | null;
  productType: ProductType | null;
  status: YuProductStatus | null;
  name: string | null;
  code: string | null;
  itemSlot: YuItemSlot | null;
  earnRate: number | null;
  description: string | null;
}

export interface GetYulifer {
  getYulifer: GetYulifer_getYulifer | null;
  /**
   * Get products by product type
   */
  personal: (GetYulifer_personal | null)[] | null;
  /**
   * Get products by product type
   */
  employer: (GetYulifer_employer | null)[] | null;
  /**
   * Get products by product type
   */
  charms: (GetYulifer_charms | null)[] | null;
}
