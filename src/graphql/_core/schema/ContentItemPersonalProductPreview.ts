/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemPersonalProductPreview
// ====================================================

export interface ContentItemPersonalProductPreview_documentHyperlink_leftIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductPreview_documentHyperlink {
  title: string;
  url: string;
  leftIcon: ContentItemPersonalProductPreview_documentHyperlink_leftIcon | null;
}

export interface ContentItemPersonalProductPreview_styles {
  property: string;
  value: string;
}

export interface ContentItemPersonalProductPreview_coverList_slotBackgroundUrl {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductPreview_coverList {
  percentCovered: number;
  monthlyCost: string;
  monthlyCostSuffix: string;
  monthlyPayout: string;
  productPreviewMarkdown: string;
  collapsingHeaderProductInfoHeading: string;
  coverType: CoverType;
  slotBackgroundUrl: ContentItemPersonalProductPreview_coverList_slotBackgroundUrl;
}

export interface ContentItemPersonalProductPreview_percentageBox {
  selectedValue: number;
  selectedCoverType: string;
  primaryColour: string;
  secondaryColour: string;
}

export interface ContentItemPersonalProductPreview {
  id: string;
  answerKey: string;
  answerKeyDefaultValue: number;
  documentHyperlink: ContentItemPersonalProductPreview_documentHyperlink | null;
  styles: ContentItemPersonalProductPreview_styles[] | null;
  coverList: ContentItemPersonalProductPreview_coverList[];
  coverExpirationDate: string;
  showYumoji: boolean;
  percentageBox: ContentItemPersonalProductPreview_percentageBox | null;
}
