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

export interface ContentItemPersonalProductPreview_coverList {
  percentCovered: number;
  monthlyCost: string;
  monthlyPayout: string;
  markdown: string;
  coverType: CoverType;
}

export interface ContentItemPersonalProductPreview {
  id: string;
  answerKey: string;
  answerKeyDefaultValue: number;
  documentHyperlink: ContentItemPersonalProductPreview_documentHyperlink;
  styles: ContentItemPersonalProductPreview_styles[] | null;
  coverList: (ContentItemPersonalProductPreview_coverList | null)[];
  coverExpirationDate: string;
}
