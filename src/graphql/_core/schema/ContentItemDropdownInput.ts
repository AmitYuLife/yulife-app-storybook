/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemDropdownInput
// ====================================================

export interface ContentItemDropdownInput_validation {
  validationName: string;
  validationValue: string;
}

export interface ContentItemDropdownInput_styles {
  property: string;
  value: string;
}

export interface ContentItemDropdownInput_dropdownOptions {
  label: string | null;
  value: string | null;
}

export interface ContentItemDropdownInput {
  id: string;
  heading: string | null;
  answerKey: string;
  validation: (ContentItemDropdownInput_validation | null)[] | null;
  styles: ContentItemDropdownInput_styles[] | null;
  dropdownOptions: (ContentItemDropdownInput_dropdownOptions | null)[];
  selectInstruction: string | null;
}
