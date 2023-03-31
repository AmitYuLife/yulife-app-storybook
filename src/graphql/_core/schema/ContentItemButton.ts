/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemButtonType, SduiActionType, ContentItemButtonSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemButton
// ====================================================

export interface ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemButton_styles {
  property: string;
  value: string;
}

export interface ContentItemButton_containerStyles {
  property: string;
  value: string;
}

export interface ContentItemButton {
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: ContentItemButton_onPress | null;
  event: ContentItemButton_event | null;
  icon: ContentItemButton_icon | null;
  contentItemButtonRightIcon: ContentItemButton_contentItemButtonRightIcon | null;
  styles: ContentItemButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: ContentItemButton_containerStyles[] | null;
  buttonSize: ContentItemButtonSize | null;
}
