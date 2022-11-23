/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemTextGroup
// ====================================================

export interface ContentItemTextGroup_items_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemTextGroup_items_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemTextGroup_items_styles {
  property: string;
  value: string;
}

export interface ContentItemTextGroup_items_labelStyles {
  property: string;
  value: string;
}

export interface ContentItemTextGroup_items {
  label: string;
  onPress: ContentItemTextGroup_items_onPress | null;
  rightIcon: ContentItemTextGroup_items_rightIcon | null;
  styles: ContentItemTextGroup_items_styles[] | null;
  labelStyles: ContentItemTextGroup_items_labelStyles[] | null;
}

export interface ContentItemTextGroup_styles {
  property: string;
  value: string;
}

export interface ContentItemTextGroup {
  id: string;
  items: ContentItemTextGroup_items[];
  styles: ContentItemTextGroup_styles[] | null;
}
