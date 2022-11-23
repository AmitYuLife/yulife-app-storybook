/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemAccordion
// ====================================================

export interface ContentItemAccordion_headerIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemAccordion_infoIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemAccordion_styles {
  property: string;
  value: string;
}

export interface ContentItemAccordion_items_info_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemAccordion_items_info {
  onPress: ContentItemAccordion_items_info_onPress | null;
}

export interface ContentItemAccordion_items {
  leftText: string;
  rightTextBody: string | null;
  rightTextLabel: string | null;
  info: ContentItemAccordion_items_info | null;
}

export interface ContentItemAccordion {
  id: string;
  heading: string | null;
  headerIcon: ContentItemAccordion_headerIcon | null;
  infoIcon: ContentItemAccordion_infoIcon | null;
  styles: ContentItemAccordion_styles[] | null;
  items: ContentItemAccordion_items[];
  subheading: string | null;
}
