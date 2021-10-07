/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemSearchPostcode
// ====================================================

export interface ContentItemSearchPostcode_styles {
  property: string;
  value: string;
}

export interface ContentItemSearchPostcode_searchInputStyles {
  property: string;
  value: string;
}

export interface ContentItemSearchPostcode_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemSearchPostcode_addressAnswerKeys {
  answerKey: string;
  addressKey: string;
}

export interface ContentItemSearchPostcode {
  id: string;
  label: string;
  headingText: string;
  searchTitle: string;
  onLoadPlaceholder: string;
  onLoadUnsuccessfulText: string;
  styles: ContentItemSearchPostcode_styles[] | null;
  searchInputStyles: ContentItemSearchPostcode_searchInputStyles[] | null;
  icon: ContentItemSearchPostcode_icon | null;
  addressAnswerKeys: ContentItemSearchPostcode_addressAnswerKeys[];
}
