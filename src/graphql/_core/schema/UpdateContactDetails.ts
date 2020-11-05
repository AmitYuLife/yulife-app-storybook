/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateContactDetailsInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateContactDetails
// ====================================================

export interface UpdateContactDetails_updateContactDetails {
  updated: boolean | null;
}

export interface UpdateContactDetails {
  /**
   * Update customer contact details
   */
  updateContactDetails: UpdateContactDetails_updateContactDetails | null;
}

export interface UpdateContactDetailsVariables {
  contactDetails?: UpdateContactDetailsInput | null;
}
