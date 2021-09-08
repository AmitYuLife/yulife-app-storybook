/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemMultiSelect
// ====================================================

export interface ContentItemMultiSelect_choices_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemMultiSelect_choices {
  id: string;
  label: string;
  icon: ContentItemMultiSelect_choices_icon | null;
}

export interface ContentItemMultiSelect {
  id: string;
  answerKey: string;
  selectedValues: string[] | null;
  choices: ContentItemMultiSelect_choices[];
}
