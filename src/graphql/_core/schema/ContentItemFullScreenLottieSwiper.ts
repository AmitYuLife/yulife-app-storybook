/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemButtonType, SduiActionType, ContentItemButtonSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemFullScreenLottieSwiper
// ====================================================

export interface ContentItemFullScreenLottieSwiper_theme {
  primaryColor: string;
  titleColor: string | null;
  progressBarForegroundColor: string | null;
  progressBarBackgroundColor: string | null;
}

export interface ContentItemFullScreenLottieSwiper_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemFullScreenLottieSwiper_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemFullScreenLottieSwiper_button_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemFullScreenLottieSwiper_button_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemFullScreenLottieSwiper_button_styles {
  property: string;
  value: string;
}

export interface ContentItemFullScreenLottieSwiper_button {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: ContentItemFullScreenLottieSwiper_button_onPress | null;
  event: ContentItemFullScreenLottieSwiper_button_event | null;
  icon: ContentItemFullScreenLottieSwiper_button_icon | null;
  rightIcon: ContentItemFullScreenLottieSwiper_button_rightIcon | null;
  styles: ContentItemFullScreenLottieSwiper_button_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface ContentItemFullScreenLottieSwiper_close_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemFullScreenLottieSwiper_close_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemFullScreenLottieSwiper_close {
  icon: ContentItemFullScreenLottieSwiper_close_icon;
  onPress: ContentItemFullScreenLottieSwiper_close_onPress;
}

export interface ContentItemFullScreenLottieSwiper_items_styles {
  property: string;
  value: string;
}

export interface ContentItemFullScreenLottieSwiper_items_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemFullScreenLottieSwiper_items {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: ContentItemFullScreenLottieSwiper_items_styles[] | null;
  onAnimationEnd: ContentItemFullScreenLottieSwiper_items_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface ContentItemFullScreenLottieSwiper {
  id: string;
  title: string;
  autoPlaySpeedMs: number;
  dismissMinVisibleIndex: number;
  ctaMinVisibleIndex: number | null;
  theme: ContentItemFullScreenLottieSwiper_theme;
  button: ContentItemFullScreenLottieSwiper_button;
  close: ContentItemFullScreenLottieSwiper_close;
  items: ContentItemFullScreenLottieSwiper_items[];
}
