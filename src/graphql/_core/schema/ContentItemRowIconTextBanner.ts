/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  ContentItemRowIconTextBannerType,
  ContentItemButtonType,
  SduiActionType,
  ContentItemButtonSize,
} from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemRowIconTextBanner
// ====================================================

export interface ContentItemRowIconTextBanner_bannerIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemRowIconTextBanner_styles {
  property: string;
  value: string;
}

export interface ContentItemRowIconTextBanner_bannerButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemRowIconTextBanner_bannerButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemRowIconTextBanner_bannerButton_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemRowIconTextBanner_bannerButton_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemRowIconTextBanner_bannerButton_styles {
  property: string;
  value: string;
}

export interface ContentItemRowIconTextBanner_bannerButton {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: ContentItemRowIconTextBanner_bannerButton_onPress | null;
  event: ContentItemRowIconTextBanner_bannerButton_event | null;
  icon: ContentItemRowIconTextBanner_bannerButton_icon | null;
  rightIcon: ContentItemRowIconTextBanner_bannerButton_rightIcon | null;
  styles: ContentItemRowIconTextBanner_bannerButton_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface ContentItemRowIconTextBanner_containerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemRowIconTextBanner_containerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemRowIconTextBanner_containerActions {
  id: string;
  event: ContentItemRowIconTextBanner_containerActions_event | null;
  onPress: ContentItemRowIconTextBanner_containerActions_onPress;
}

export interface ContentItemRowIconTextBanner {
  id: string;
  /**
   * determines client-side style template e.g. error for red
   */
  bannerType: ContentItemRowIconTextBannerType;
  markdown: string;
  bannerIcon: ContentItemRowIconTextBanner_bannerIcon;
  styles: ContentItemRowIconTextBanner_styles[] | null;
  /**
   * RN client version >= 3.45.0
   */
  titleMarkdown: string | null;
  /**
   * RN client version >= 3.45.0
   */
  showCloseIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   */
  bannerButton: ContentItemRowIconTextBanner_bannerButton | null;
  /**
   * RN client version >= 3.45.0: icon field is required, so showIcon is used
   * here for backward compatibility to conditionally hide the icon
   */
  showIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions: ContentItemRowIconTextBanner_containerActions | null;
}
