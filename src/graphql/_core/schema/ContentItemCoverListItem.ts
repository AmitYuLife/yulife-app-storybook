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
  percentCovered: number | null;
  monthlyCost: string | null;
  monthlyCostSuffix: string | null;
  monthlyPayout: string | null;
  productPreviewMarkdown: string | null;
  collapsingHeaderProductInfoHeading: string | null;
  coverType: CoverType | null;
  minValue: number | null;
  slotBackgroundUrl: ContentItemCoverListItem_slotBackgroundUrl | null;
}
