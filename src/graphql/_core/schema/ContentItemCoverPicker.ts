/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemCoverPicker
// ====================================================

export interface ContentItemCoverPicker_styles {
  property: string;
  value: string;
}

export interface ContentItemCoverPicker_options {
  value: number;
  coverType: CoverType;
  subheading: string;
  heading: string;
}

export interface ContentItemCoverPicker {
  id: string;
  answerKey: string;
  answerKeyDefaultValue: number;
  styles: ContentItemCoverPicker_styles[] | null;
  options: ContentItemCoverPicker_options[] | null;
}
