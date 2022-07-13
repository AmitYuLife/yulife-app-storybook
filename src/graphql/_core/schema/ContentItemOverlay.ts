/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemButtonType, SduiActionType, ContentItemButtonSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemOverlay
// ====================================================

export interface ContentItemOverlay_buttons_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemOverlay_buttons_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemOverlay_buttons_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemOverlay_buttons_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemOverlay_buttons_styles {
  property: string;
  value: string;
}

export interface ContentItemOverlay_buttons {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: ContentItemOverlay_buttons_onPress | null;
  event: ContentItemOverlay_buttons_event | null;
  icon: ContentItemOverlay_buttons_icon | null;
  rightIcon: ContentItemOverlay_buttons_rightIcon | null;
  styles: ContentItemOverlay_buttons_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface ContentItemOverlay {
  id: string;
  markdown: string;
  buttons: ContentItemOverlay_buttons[];
}
