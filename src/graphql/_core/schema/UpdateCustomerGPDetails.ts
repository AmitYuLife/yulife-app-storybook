/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateCustomerGPDetailsInput, UpdateCustomerGPDetailsOptions } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateCustomerGPDetails
// ====================================================

export interface UpdateCustomerGPDetails_updateCustomerGPDetails {
  updated: boolean | null;
}

export interface UpdateCustomerGPDetails {
  /**
   * Update customer GP details
   */
  updateCustomerGPDetails: UpdateCustomerGPDetails_updateCustomerGPDetails | null;
}

export interface UpdateCustomerGPDetailsVariables {
  gpDetails?: UpdateCustomerGPDetailsInput | null;
  options?: UpdateCustomerGPDetailsOptions | null;
}
