/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MobileOnboardingStepPerformed, SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetMobileWhatsNewModal
// ====================================================

export interface GetMobileWhatsNewModal_getMobileWhatsNewModal_theme {
  statusBar: string | null;
  primaryColor: string;
  titleColor: string;
  progressBarForegroundColor: string;
  progressBarBackgroundColor: string;
}

export interface GetMobileWhatsNewModal_getMobileWhatsNewModal_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetMobileWhatsNewModal_getMobileWhatsNewModal_button {
  label: string;
  onPress: GetMobileWhatsNewModal_getMobileWhatsNewModal_button_onPress;
}

export interface GetMobileWhatsNewModal_getMobileWhatsNewModal_close_icon {
  id: string;
  uri: string | null;
}

export interface GetMobileWhatsNewModal_getMobileWhatsNewModal_close_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetMobileWhatsNewModal_getMobileWhatsNewModal_close {
  icon: GetMobileWhatsNewModal_getMobileWhatsNewModal_close_icon;
  onPress: GetMobileWhatsNewModal_getMobileWhatsNewModal_close_onPress | null;
}

export interface GetMobileWhatsNewModal_getMobileWhatsNewModal_items_styles {
  property: string;
  value: string;
}

export interface GetMobileWhatsNewModal_getMobileWhatsNewModal_items_backgroundImage {
  id: string;
  uri: string | null;
}

export interface GetMobileWhatsNewModal_getMobileWhatsNewModal_items_lottie {
  jsonUri: string;
  aspectRatio: number;
}

export interface GetMobileWhatsNewModal_getMobileWhatsNewModal_items {
  id: string;
  heading: string;
  paragraph: string;
  styles: GetMobileWhatsNewModal_getMobileWhatsNewModal_items_styles[] | null;
  backgroundImage: GetMobileWhatsNewModal_getMobileWhatsNewModal_items_backgroundImage;
  lottie: GetMobileWhatsNewModal_getMobileWhatsNewModal_items_lottie | null;
}

export interface GetMobileWhatsNewModal_getMobileWhatsNewModal {
  id: MobileOnboardingStepPerformed;
  title: string;
  autoPlaySpeedMs: number;
  dismissMinVisibleIndex: number;
  ctaMinVisibleIndex: number | null;
  theme: GetMobileWhatsNewModal_getMobileWhatsNewModal_theme;
  button: GetMobileWhatsNewModal_getMobileWhatsNewModal_button | null;
  close: GetMobileWhatsNewModal_getMobileWhatsNewModal_close;
  items: GetMobileWhatsNewModal_getMobileWhatsNewModal_items[];
  refetchQueries: string[] | null;
}

export interface GetMobileWhatsNewModal {
  getMobileWhatsNewModal: GetMobileWhatsNewModal_getMobileWhatsNewModal | null;
}
