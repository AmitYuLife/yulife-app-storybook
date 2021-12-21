/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType, ContentItemCollapsingHeaderProductInfoType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemCollapsingHeaderProductInfo
// ====================================================

export interface ContentItemCollapsingHeaderProductInfo_coverList_slotBackgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemCollapsingHeaderProductInfo_coverList {
  percentCovered: number | null;
  monthlyCost: string | null;
  monthlyCostSuffix: string | null;
  monthlyPayout: string | null;
  productPreviewMarkdown: string | null;
  collapsingHeaderProductInfoHeading: string | null;
  coverType: CoverType | null;
  minValue: number | null;
  slotBackgroundUrl: ContentItemCollapsingHeaderProductInfo_coverList_slotBackgroundUrl | null;
}

export interface ContentItemCollapsingHeaderProductInfo {
  id: string;
  answerKey: string;
  coverList: ContentItemCollapsingHeaderProductInfo_coverList[];
  type: ContentItemCollapsingHeaderProductInfoType | null;
}
