/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BeneficiaryShareOfBenefit } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SetShareOfBenefitForProduct
// ====================================================

export interface SetShareOfBenefitForProduct_setShareOfBenefitForProduct_beneficiaries {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  relationship: string | null;
  shareOfBenefit: number;
}

export interface SetShareOfBenefitForProduct_setShareOfBenefitForProduct {
  id: string;
  beneficiaries: SetShareOfBenefitForProduct_setShareOfBenefitForProduct_beneficiaries[] | null;
}

export interface SetShareOfBenefitForProduct {
  /**
   * Updates the shares of a beneficiary
   */
  setShareOfBenefitForProduct: SetShareOfBenefitForProduct_setShareOfBenefitForProduct;
}

export interface SetShareOfBenefitForProductVariables {
  productId: string;
  shares: BeneficiaryShareOfBenefit[];
}
