/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductCode } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpsertTopUpsProductEntity
// ====================================================

export interface UpsertTopUpsProductEntity_upsertTopUpsProductEntity {
  id: string | null;
}

export interface UpsertTopUpsProductEntity {
  /**
   * Creates or updates a product entity for customers
   */
  upsertTopUpsProductEntity: UpsertTopUpsProductEntity_upsertTopUpsProductEntity | null;
}

export interface UpsertTopUpsProductEntityVariables {
  product: ProductCode;
}
