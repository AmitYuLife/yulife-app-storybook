/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType, ContentItemButtonType, ContentItemButtonSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemFullScreenSwiper
// ====================================================

export interface ContentItemFullScreenSwiper_theme {
  primaryColor: string;
}

export interface ContentItemFullScreenSwiper_close_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemFullScreenSwiper_close_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemFullScreenSwiper_close {
  icon: ContentItemFullScreenSwiper_close_icon;
  onPress: ContentItemFullScreenSwiper_close_onPress;
}

export interface ContentItemFullScreenSwiper_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemFullScreenSwiper_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemFullScreenSwiper_button_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemFullScreenSwiper_button_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemFullScreenSwiper_button_styles {
  property: string;
  value: string;
}

export interface ContentItemFullScreenSwiper_button {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: ContentItemFullScreenSwiper_button_onPress | null;
  event: ContentItemFullScreenSwiper_button_event | null;
  icon: ContentItemFullScreenSwiper_button_icon | null;
  rightIcon: ContentItemFullScreenSwiper_button_rightIcon | null;
  styles: ContentItemFullScreenSwiper_button_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface ContentItemFullScreenSwiper_items_backgroundImage {
  id: string;
  uri: string | null;
}

export interface ContentItemFullScreenSwiper_items_styles {
  property: string;
  value: string;
}

export interface ContentItemFullScreenSwiper_items {
  backgroundImage: ContentItemFullScreenSwiper_items_backgroundImage;
  styles: ContentItemFullScreenSwiper_items_styles[] | null;
  heading: string;
  paragraph: string;
  title: string;
}

export interface ContentItemFullScreenSwiper {
  id: string;
  title: string;
  dismissMinVisibleIndex: number;
  autoPlaySpeedMs: number;
  theme: ContentItemFullScreenSwiper_theme;
  close: ContentItemFullScreenSwiper_close;
  button: ContentItemFullScreenSwiper_button;
  items: ContentItemFullScreenSwiper_items[];
}
