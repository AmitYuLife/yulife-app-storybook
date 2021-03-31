/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProductDetails
// ====================================================

export interface GetProductDetails_getProductDetails_benefit {
  description: string;
  value: string;
}

export interface GetProductDetails_getProductDetails_certificate_heading {
  description: string;
  value: string;
}

export interface GetProductDetails_getProductDetails_certificate_condition {
  description: string;
  value: string;
}

export interface GetProductDetails_getProductDetails_certificate {
  /**
   * Used as the heading in policy detail certificate e.g. Total cover 25% of salary
   */
  heading: GetProductDetails_getProductDetails_certificate_heading | null;
  /**
   * Used as body in the policy detail certificate e.g. "Provides financial support if you cannot work due to ill health."
   */
  body: string;
  /**
   * Used as info for terms and conditions on policy detail certificate e.g. Paid over 24 months
   */
  condition: GetProductDetails_getProductDetails_certificate_condition[];
  /**
   * Business name
   */
  companyName: string;
  /**
   * Customer name
   */
  customerFullName: string;
  /**
   * Customer join date
   */
  customerJoinDate: string;
}

export interface GetProductDetails_getProductDetails {
  /**
   * Product's ID
   */
  productId: string | null;
  /**
   * Name e.g. Group Life Insurance
   */
  productName: string;
  /**
   * Product's policy number
   */
  policyNumber: string;
  /**
   * Additional earn rate gained from product
   */
  earnRate: number;
  /**
   * Link to png image
   */
  productIconUri: string | null;
  /**
   * Description of product, can include benefitDescription and benefitValue
   */
  productDescription: string;
  /**
   * e.g. common, rare, epic
   */
  coverType: CoverType;
  /**
   * Date when policy was last updated
   */
  policyLastUpdated: string | null;
  /**
   * Benefit description/value pair, appears typically on mobile product cards
   */
  benefit: GetProductDetails_getProductDetails_benefit | null;
  /**
   * Data for product certificate UI
   */
  certificate: GetProductDetails_getProductDetails_certificate | null;
}

export interface GetProductDetails {
  /**
   * Get product details given id
   */
  getProductDetails: GetProductDetails_getProductDetails | null;
}

export interface GetProductDetailsVariables {
  id: string;
}
