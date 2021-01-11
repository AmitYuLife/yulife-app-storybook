/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductType, YuProductId, YuProductStatus, YuItemSlot, CoverType, YuWorld } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYuProducts
// ====================================================

export interface GetYuProducts_getYuProducts_options_styles {
  world: YuWorld | null;
  name: string | null;
  icon: string | null;
  background: string | null;
}

export interface GetYuProducts_getYuProducts_options {
  type: CoverType | null;
  earnRate: number | null;
  heading: string | null;
  percentageCovered: number | null;
  styles: (GetYuProducts_getYuProducts_options_styles | null)[] | null;
}

export interface GetYuProducts_getYuProducts {
  productId: YuProductId | null;
  productType: ProductType | null;
  status: YuProductStatus | null;
  name: string | null;
  code: string | null;
  itemSlot: YuItemSlot | null;
  earnRate: number | null;
  description: string | null;
  options: (GetYuProducts_getYuProducts_options | null)[] | null;
}

export interface GetYuProducts {
  /**
   * Get products by product type
   */
  getYuProducts: (GetYuProducts_getYuProducts | null)[] | null;
}

export interface GetYuProductsVariables {
  productType?: ProductType | null;
}
