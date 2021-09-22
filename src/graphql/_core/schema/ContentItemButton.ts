/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemButtonType, ContentItemSDUIAction, ContentItemButtonSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemButton
// ====================================================

export interface ContentItemButton_onPress {
  type: ContentItemSDUIAction;
  payload: string | null;
}

export interface ContentItemButton_event {
  type: ContentItemSDUIAction;
  payload: string | null;
}

export interface ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemButton_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemButton_styles {
  property: string;
  value: string;
}

export interface ContentItemButton {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: ContentItemButton_onPress | null;
  event: ContentItemButton_event | null;
  icon: ContentItemButton_icon | null;
  rightIcon: ContentItemButton_rightIcon | null;
  styles: ContentItemButton_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}
