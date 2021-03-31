/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CustomerBeneficiaryUpdate } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateOrUpdateBeneficiary
// ====================================================

export interface CreateOrUpdateBeneficiary_updateBeneficiaryForProduct_beneficiaries {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  relationship: string | null;
  shareOfBenefit: number;
}

export interface CreateOrUpdateBeneficiary_updateBeneficiaryForProduct {
  id: string;
  beneficiaries: CreateOrUpdateBeneficiary_updateBeneficiaryForProduct_beneficiaries[] | null;
}

export interface CreateOrUpdateBeneficiary {
  /**
   * Updates an existing beneficiary or updates an existing if an ID is provided
   */
  updateBeneficiaryForProduct: CreateOrUpdateBeneficiary_updateBeneficiaryForProduct;
}

export interface CreateOrUpdateBeneficiaryVariables {
  beneficiary?: CustomerBeneficiaryUpdate | null;
}
