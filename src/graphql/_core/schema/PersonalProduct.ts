/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { YuProductId, ProductType, YuProductStatus, YuItemSlot, CoverType, YuWorld } from "./globalTypes";

// ====================================================
// GraphQL fragment: PersonalProduct
// ====================================================

export interface PersonalProduct_options_styles {
  world: YuWorld | null;
  name: string | null;
  icon: string | null;
  background: string | null;
  armor: string | null;
}

export interface PersonalProduct_options_powers {
  id: string | null;
  title: string | null;
  description: string | null;
  icon: string | null;
}

export interface PersonalProduct_options {
  type: CoverType | null;
  earnRate: number | null;
  heading: string | null;
  percentageCovered: number | null;
  styles: (PersonalProduct_options_styles | null)[] | null;
  powers: (PersonalProduct_options_powers | null)[] | null;
}

export interface PersonalProduct {
  productId: YuProductId | null;
  productType: ProductType | null;
  status: YuProductStatus | null;
  name: string | null;
  code: string | null;
  itemSlot: YuItemSlot | null;
  earnRate: number | null;
  description: string | null;
  options: (PersonalProduct_options | null)[] | null;
}
