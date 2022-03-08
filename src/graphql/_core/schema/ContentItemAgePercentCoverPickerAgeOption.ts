/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemAgePercentCoverPickerAgeOption
// ====================================================

export interface ContentItemAgePercentCoverPickerAgeOption_contentItemAgePercentCoverPickerAgeOptions {
  contentItemAgePercentCoverPickerPercentOptionValue: number;
  cost: string;
  monthlyPayout: string;
  coverType: CoverType;
}

export interface ContentItemAgePercentCoverPickerAgeOption {
  age: number;
  contentItemAgePercentCoverPickerAgeOptions: ContentItemAgePercentCoverPickerAgeOption_contentItemAgePercentCoverPickerAgeOptions[];
}
