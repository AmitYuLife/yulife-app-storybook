/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveBeneficiaryFromProduct
// ====================================================

export interface RemoveBeneficiaryFromProduct_removeBeneficiaryFromProduct_beneficiaries {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  relationship: string | null;
  shareOfBenefit: number;
}

export interface RemoveBeneficiaryFromProduct_removeBeneficiaryFromProduct {
  id: string;
  beneficiaries: RemoveBeneficiaryFromProduct_removeBeneficiaryFromProduct_beneficiaries[] | null;
}

export interface RemoveBeneficiaryFromProduct {
  /**
   * Removes beneficiary from product
   */
  removeBeneficiaryFromProduct: RemoveBeneficiaryFromProduct_removeBeneficiaryFromProduct;
}

export interface RemoveBeneficiaryFromProductVariables {
  productId: string;
  beneficiaryId: string;
}
