/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemButtonType, ContentItemSDUIAction, ContentItemButtonSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemMultiButton
// ====================================================

export interface ContentItemMultiButton_buttons_onPress {
  type: ContentItemSDUIAction;
  payload: string | null;
}

export interface ContentItemMultiButton_buttons_event {
  type: ContentItemSDUIAction;
  payload: string | null;
}

export interface ContentItemMultiButton_buttons_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemMultiButton_buttons_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemMultiButton_buttons_styles {
  property: string;
  value: string;
}

export interface ContentItemMultiButton_buttons {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: ContentItemMultiButton_buttons_onPress | null;
  event: ContentItemMultiButton_buttons_event | null;
  icon: ContentItemMultiButton_buttons_icon | null;
  rightIcon: ContentItemMultiButton_buttons_rightIcon | null;
  styles: ContentItemMultiButton_buttons_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface ContentItemMultiButton_styles {
  property: string;
  value: string;
}

export interface ContentItemMultiButton {
  id: string;
  buttons: ContentItemMultiButton_buttons[];
  value: string | null;
  answerKey: string;
  styles: ContentItemMultiButton_styles[] | null;
}
