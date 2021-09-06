/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemTextInput
// ====================================================

export interface ContentItemTextInput_validation {
  validationName: string;
  validationValue: string;
}

export interface ContentItemTextInput {
  id: string;
  heading: string | null;
  value: string | null;
  answerKey: string;
  validation: (ContentItemTextInput_validation | null)[] | null;
  prefixValue: string | null;
}
