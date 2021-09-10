/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemFormTextInputType } from "./globalTypes";

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
  answerKey: string;
  type: ContentItemFormTextInputType | null;
  prefixValue: string | null;
  validation: (ContentItemTextInput_validation | null)[] | null;
}
