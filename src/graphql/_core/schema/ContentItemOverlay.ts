/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemButtonType, ContentItemSDUIAction, ContentItemButtonSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemOverlay
// ====================================================

export interface ContentItemOverlay_buttons_onPress {
  type: ContentItemSDUIAction;
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
  onPress: ContentItemOverlay_buttons_onPress | null;
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
