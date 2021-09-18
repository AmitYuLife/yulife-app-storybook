/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemCollapsingHeaderProductInfo
// ====================================================

export interface ContentItemCollapsingHeaderProductInfo_coverList_slotBackgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemCollapsingHeaderProductInfo_coverList {
  percentCovered: number;
  monthlyCost: string;
  monthlyCostSuffix: string;
  monthlyPayout: string;
  productPreviewMarkdown: string;
  collapsingHeaderProductInfoHeading: string;
  coverType: CoverType;
  slotBackgroundUrl: ContentItemCollapsingHeaderProductInfo_coverList_slotBackgroundUrl;
}

export interface ContentItemCollapsingHeaderProductInfo {
  id: string;
  answerKey: string;
  coverList: ContentItemCollapsingHeaderProductInfo_coverList[];
}
