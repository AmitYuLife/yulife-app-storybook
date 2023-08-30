/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProductBeneficiaries
// ====================================================

export interface GetProductBeneficiaries_getProductBeneficiaries_beneficiaries {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phoneNumber: string | null;
  relationship: string | null;
  shareOfBenefit: number;
}

export interface GetProductBeneficiaries_getProductBeneficiaries {
  id: string;
  beneficiaries: GetProductBeneficiaries_getProductBeneficiaries_beneficiaries[] | null;
}

export interface GetProductBeneficiaries {
  /**
   * Query to get a customer's beneficiaries for a product
   */
  getProductBeneficiaries: GetProductBeneficiaries_getProductBeneficiaries;
}

export interface GetProductBeneficiariesVariables {
  productId?: string | null;
}
