/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemFormTextInputType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemForm
// ====================================================

export interface ContentItemForm_elements_ContentItemFormTextInput_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemForm_elements_ContentItemFormTextInput_validation {
  regex: string;
  message: string;
}

export interface ContentItemForm_elements_ContentItemFormTextInput {
  __typename: "ContentItemFormTextInput";
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string | null;
  type: ContentItemFormTextInputType | null;
  icon: ContentItemForm_elements_ContentItemFormTextInput_icon | null;
  validation: (ContentItemForm_elements_ContentItemFormTextInput_validation | null)[] | null;
}

export interface ContentItemForm_elements_ContentItemFormSelectInput_defaultOption {
  label: string | null;
  value: string | null;
}

export interface ContentItemForm_elements_ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemForm_elements_ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface ContentItemForm_elements_ContentItemFormSelectInput_validation {
  regex: string;
  message: string;
}

export interface ContentItemForm_elements_ContentItemFormSelectInput {
  __typename: "ContentItemFormSelectInput";
  id: string;
  name: string;
  placeholder: string;
  modalPlaceholder: string;
  defaultOption: ContentItemForm_elements_ContentItemFormSelectInput_defaultOption | null;
  icon: ContentItemForm_elements_ContentItemFormSelectInput_icon | null;
  options: (ContentItemForm_elements_ContentItemFormSelectInput_options | null)[];
  validation: (ContentItemForm_elements_ContentItemFormSelectInput_validation | null)[] | null;
}

export interface ContentItemForm_elements_ContentItemFormSubmitButton {
  __typename: "ContentItemFormSubmitButton";
  id: string;
  label: string;
}

export type ContentItemForm_elements =
  | ContentItemForm_elements_ContentItemFormTextInput
  | ContentItemForm_elements_ContentItemFormSelectInput
  | ContentItemForm_elements_ContentItemFormSubmitButton;

export interface ContentItemForm {
  elements: (ContentItemForm_elements | null)[] | null;
}
