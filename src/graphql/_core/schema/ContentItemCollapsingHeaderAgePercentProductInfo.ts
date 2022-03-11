/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemCollapsingHeaderAgePercentProductInfo
// ====================================================

export interface ContentItemCollapsingHeaderAgePercentProductInfo_styles {
  property: string;
  value: string;
}

export interface ContentItemCollapsingHeaderAgePercentProductInfo_collapsingHeaderAgePercentProductInfoData_answerKeys {
  ageToEnd: string | null;
  salaryPercent: string | null;
  coverType: string | null;
  worldId: string | null;
}

export interface ContentItemCollapsingHeaderAgePercentProductInfo_collapsingHeaderAgePercentProductInfoData_agePercentCoverList_contentItemAgePercentCoverPickerAgeOptions {
  contentItemAgePercentCoverPickerPercentOptionValue: number;
  cost: string;
  monthlyPayout: string;
  coverType: CoverType;
}

export interface ContentItemCollapsingHeaderAgePercentProductInfo_collapsingHeaderAgePercentProductInfoData_agePercentCoverList {
  age: number;
  contentItemAgePercentCoverPickerAgeOptions: ContentItemCollapsingHeaderAgePercentProductInfo_collapsingHeaderAgePercentProductInfoData_agePercentCoverList_contentItemAgePercentCoverPickerAgeOptions[];
}

export interface ContentItemCollapsingHeaderAgePercentProductInfo_collapsingHeaderAgePercentProductInfoData {
  answerKeys: ContentItemCollapsingHeaderAgePercentProductInfo_collapsingHeaderAgePercentProductInfoData_answerKeys;
  agePercentCoverList: ContentItemCollapsingHeaderAgePercentProductInfo_collapsingHeaderAgePercentProductInfoData_agePercentCoverList[];
  monthlyCostDynamicCopy: string;
  monthlyCostReplacementString: string;
  salaryPercentDynamicCopy: string;
  salaryPercentReplacementString: string;
}

export interface ContentItemCollapsingHeaderAgePercentProductInfo {
  id: string;
  styles: ContentItemCollapsingHeaderAgePercentProductInfo_styles[] | null;
  /**
   * Takes a ContentItem's id as value
   * Header will expand once the ContentItem is in view
   * target ContentItem needs to implement setComponentsLayout from ProductStepContext
   */
  expandOnComponentId: string | null;
  /**
   * Overrides everything else, set to the number of pixels scrolled before the header expands.
   * Set to 0 if it's always expanded
   */
  expandThreshold: number | null;
  collapsingHeaderAgePercentProductInfoData: ContentItemCollapsingHeaderAgePercentProductInfo_collapsingHeaderAgePercentProductInfoData | null;
}
