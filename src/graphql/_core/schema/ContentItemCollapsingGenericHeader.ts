/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemCollapsingGenericHeader
// ====================================================

export interface ContentItemCollapsingGenericHeader_styles {
  property: string;
  value: string;
}

export interface ContentItemCollapsingGenericHeader_contentItemCollapsingGenericHeaderRightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemCollapsingGenericHeader_collapsedRightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemCollapsingGenericHeader_onPressRightIcon {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemCollapsingGenericHeader {
  id: string;
  title: string | null;
  styles: ContentItemCollapsingGenericHeader_styles[] | null;
  contentItemCollapsingGenericHeaderRightIcon: ContentItemCollapsingGenericHeader_contentItemCollapsingGenericHeaderRightIcon | null;
  collapsedRightIcon: ContentItemCollapsingGenericHeader_collapsedRightIcon | null;
  onPressRightIcon: ContentItemCollapsingGenericHeader_onPressRightIcon | null;
}
