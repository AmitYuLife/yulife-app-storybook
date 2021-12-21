/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType, CoverType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemPersonalProductPreview
// ====================================================

export interface ContentItemPersonalProductPreview_documentHyperlink_leftIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemPersonalProductPreview_documentHyperlink_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemPersonalProductPreview_documentHyperlink {
  title: string;
  leftIcon: ContentItemPersonalProductPreview_documentHyperlink_leftIcon | null;
  onPress: ContentItemPersonalProductPreview_documentHyperlink_onPress;
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
  percentCovered: number | null;
  monthlyCost: string | null;
  monthlyCostSuffix: string | null;
  monthlyPayout: string | null;
  productPreviewMarkdown: string | null;
  collapsingHeaderProductInfoHeading: string | null;
  coverType: CoverType | null;
  minValue: number | null;
  slotBackgroundUrl: ContentItemPersonalProductPreview_coverList_slotBackgroundUrl | null;
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
