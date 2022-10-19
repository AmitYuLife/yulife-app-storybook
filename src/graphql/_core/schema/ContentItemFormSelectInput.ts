/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemFormSelectInput
// ====================================================

export interface ContentItemFormSelectInput_defaultOption {
  label: string | null;
  value: string | null;
}

export interface ContentItemFormSelectInput_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemFormSelectInput_options {
  label: string | null;
  value: string | null;
}

export interface ContentItemFormSelectInput_validation {
  regex: string;
  message: string;
}

export interface ContentItemFormSelectInput {
  id: string;
  name: string;
  placeholder: string;
  modalPlaceholder: string;
  defaultOption: ContentItemFormSelectInput_defaultOption | null;
  icon: ContentItemFormSelectInput_icon | null;
  options: (ContentItemFormSelectInput_options | null)[];
  validation: (ContentItemFormSelectInput_validation | null)[] | null;
}
