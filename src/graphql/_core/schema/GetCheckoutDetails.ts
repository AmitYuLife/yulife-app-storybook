/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetTopUpsQuoteInput, ProductCode, CoverType, YuProductId, YuWorld } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetCheckoutDetails
// ====================================================

export interface GetCheckoutDetails_paymentDetails {
  expMonth: number;
  expYear: number;
  last4: string;
  name: string;
  brand: string;
}

export interface GetCheckoutDetails_quote {
  actualCost: number | null;
  /**
   * Selected cover
   */
  coverType: CoverType | null;
}

export interface GetCheckoutDetails_personal_chest_options_styles {
  world: YuWorld | null;
  name: string | null;
  icon: string | null;
  background: string | null;
  armor: string | null;
}

export interface GetCheckoutDetails_personal_chest_options {
  type: CoverType | null;
  styles: (GetCheckoutDetails_personal_chest_options_styles | null)[] | null;
}

export interface GetCheckoutDetails_personal_chest {
  productId: YuProductId | null;
  name: string | null;
  options: (GetCheckoutDetails_personal_chest_options | null)[] | null;
}

export interface GetCheckoutDetails_personal {
  chest: GetCheckoutDetails_personal_chest | null;
}

export interface GetCheckoutDetails_gpDetails {
  gpAddress: string | null;
  gpName: string | null;
  gpPostcode: string | null;
  gpPractice: string | null;
  gpTown: string | null;
}

export interface GetCheckoutDetails {
  /**
   * Get user stripe payment details
   */
  paymentDetails: GetCheckoutDetails_paymentDetails | null;
  /**
   * Query to obtain a quote for top ups
   */
  quote: GetCheckoutDetails_quote | null;
  /**
   * Get personal products
   */
  personal: GetCheckoutDetails_personal | null;
  /**
   * Get user gp details
   */
  gpDetails: GetCheckoutDetails_gpDetails | null;
}

export interface GetCheckoutDetailsVariables {
  input: GetTopUpsQuoteInput;
  product: ProductCode;
}
