/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPersonalProductStepContinueModal
// ====================================================

export interface GetPersonalProductStepContinueModal_copy_image {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStepContinueModal_copy {
  id: string;
  image: GetPersonalProductStepContinueModal_copy_image;
  heading: string;
  subheading: string;
  continueCtaLabel: string;
  startOverCtaLabel: string;
}

export interface GetPersonalProductStepContinueModal {
  copy: GetPersonalProductStepContinueModal_copy | null;
}

export interface GetPersonalProductStepContinueModalVariables {
  productId: string;
}
