/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemCoverListItem
// ====================================================

export interface ContentItemCoverListItem_slotBackgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemCoverListItem {
  percentCovered: number;
  monthlyCost: string;
  monthlyCostSuffix: string;
  monthlyPayout: string;
  productPreviewMarkdown: string;
  collapsingHeaderProductInfoHeading: string;
  coverType: CoverType;
  slotBackgroundUrl: ContentItemCoverListItem_slotBackgroundUrl;
}
