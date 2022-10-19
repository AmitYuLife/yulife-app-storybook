/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemFormTextInputType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemFormElements
// ====================================================

export interface ContentItemFormElements_ContentItemFormTextInput_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemFormElements_ContentItemFormTextInput_validation {
  regex: string;
  message: string;
}

export interface ContentItemFormElements_ContentItemFormTextInput {
  __typename: "ContentItemFormTextInput";
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string | null;
  type: ContentItemFormTextInputType | null;
  icon: ContentItemFormElements_ContentItemFormTextInput_icon | null;
  validation: (ContentItemFormElements_ContentItemFormTextInput_validation | null)[] | null;
}

export interface ContentItemFormElements_ContentItemFormSelectInput_defaultOption {
  label: string | null;
  value: string | null;
}

export interface ContentItemFormElements_ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemFormElements_ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface ContentItemFormElements_ContentItemFormSelectInput_validation {
  regex: string;
  message: string;
}

export interface ContentItemFormElements_ContentItemFormSelectInput {
  __typename: "ContentItemFormSelectInput";
  id: string;
  name: string;
  placeholder: string;
  modalPlaceholder: string;
  defaultOption: ContentItemFormElements_ContentItemFormSelectInput_defaultOption | null;
  icon: ContentItemFormElements_ContentItemFormSelectInput_icon | null;
  options: (ContentItemFormElements_ContentItemFormSelectInput_options | null)[];
  validation: (ContentItemFormElements_ContentItemFormSelectInput_validation | null)[] | null;
}

export interface ContentItemFormElements_ContentItemFormSubmitButton {
  __typename: "ContentItemFormSubmitButton";
  id: string;
  label: string;
}

export type ContentItemFormElements =
  | ContentItemFormElements_ContentItemFormTextInput
  | ContentItemFormElements_ContentItemFormSelectInput
  | ContentItemFormElements_ContentItemFormSubmitButton;
