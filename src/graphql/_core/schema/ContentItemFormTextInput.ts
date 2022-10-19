/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemFormTextInputType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemFormTextInput
// ====================================================

export interface ContentItemFormTextInput_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemFormTextInput_validation {
  regex: string;
  message: string;
}

export interface ContentItemFormTextInput {
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string | null;
  type: ContentItemFormTextInputType | null;
  icon: ContentItemFormTextInput_icon | null;
  validation: (ContentItemFormTextInput_validation | null)[] | null;
}
