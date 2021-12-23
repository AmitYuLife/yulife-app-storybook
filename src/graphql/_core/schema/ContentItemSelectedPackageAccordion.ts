/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType, SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemSelectedPackageAccordion
// ====================================================

export interface ContentItemSelectedPackageAccordion_headerIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemSelectedPackageAccordion_infoIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemSelectedPackageAccordion_styles {
  property: string;
  value: string;
}

export interface ContentItemSelectedPackageAccordion_coverOptions_items_info_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemSelectedPackageAccordion_coverOptions_items_info {
  onPress: ContentItemSelectedPackageAccordion_coverOptions_items_info_onPress | null;
}

export interface ContentItemSelectedPackageAccordion_coverOptions_items {
  leftText: string;
  rightTextBody: string | null;
  rightTextLabel: string | null;
  info: ContentItemSelectedPackageAccordion_coverOptions_items_info | null;
}

export interface ContentItemSelectedPackageAccordion_coverOptions {
  coverType: CoverType;
  subheading: string | null;
  items: ContentItemSelectedPackageAccordion_coverOptions_items[];
}

export interface ContentItemSelectedPackageAccordion {
  id: string;
  heading: string | null;
  headerIcon: ContentItemSelectedPackageAccordion_headerIcon | null;
  infoIcon: ContentItemSelectedPackageAccordion_infoIcon | null;
  styles: ContentItemSelectedPackageAccordion_styles[] | null;
  coverOptions: ContentItemSelectedPackageAccordion_coverOptions[] | null;
}
