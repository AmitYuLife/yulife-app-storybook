/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType, ContentItemButtonType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetTodayEarnings
// ====================================================

export interface GetTodayEarnings_getTodayEarnings_header {
  yuCoinToday: string;
  yuCoinPower: number;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_titleAccessibility {
  accessibilityLabel: string;
  accessibilityRole: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_wellDoneBanner {
  uri: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_button {
  label: string;
  onPress: GetTodayEarnings_getTodayEarnings_activityFeed_button_onPress | null;
  type: ContentItemButtonType | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_buttonAccessibility {
  accessibilityLabel: string;
  accessibilityRole: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_toast_iconUrl {
  uri: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_toast {
  backgroundColor: string;
  borderColor: string;
  description: string | null;
  iconUrl: GetTodayEarnings_getTodayEarnings_activityFeed_toast_iconUrl;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_iconUrl {
  uri: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_body_iconUrl {
  uri: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_body {
  title: string;
  iconUrl: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_body_iconUrl;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast_iconUrl {
  uri: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast_button {
  label: string;
  onPress: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast_button_onPress | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast {
  backgroundColor: string;
  borderColor: string;
  description: string | null;
  iconUrl: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast_iconUrl;
  button: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast_button | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_accessibility {
  accessibilityLabel: string;
  accessibilityRole: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal {
  header: string;
  iconUrl: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_iconUrl;
  body: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_body[];
  toast: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast;
  accessibility: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_accessibility;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_activityProgress_accessibility {
  accessibilityLabel: string;
  accessibilityRole: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_activityProgress_iconUrl {
  uri: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_activityProgress {
  type: string;
  activitySubTotal: string;
  yuCoinSubTotal: string;
  rating: number;
  maxLength: number;
  currentPosition: number;
  accessibility: GetTodayEarnings_getTodayEarnings_activityFeed_activityProgress_accessibility;
  iconUrl: GetTodayEarnings_getTodayEarnings_activityFeed_activityProgress_iconUrl;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed {
  id: string;
  title: string;
  titleAccessibility: GetTodayEarnings_getTodayEarnings_activityFeed_titleAccessibility;
  emptyMessage: string | null;
  wellDoneBanner: GetTodayEarnings_getTodayEarnings_activityFeed_wellDoneBanner | null;
  button: GetTodayEarnings_getTodayEarnings_activityFeed_button | null;
  buttonAccessibility: GetTodayEarnings_getTodayEarnings_activityFeed_buttonAccessibility | null;
  toast: GetTodayEarnings_getTodayEarnings_activityFeed_toast | null;
  questionMarkModal: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal | null;
  activityProgress: GetTodayEarnings_getTodayEarnings_activityFeed_activityProgress[];
}

export interface GetTodayEarnings_getTodayEarnings {
  header: GetTodayEarnings_getTodayEarnings_header;
  activityFeed: GetTodayEarnings_getTodayEarnings_activityFeed[];
}

export interface GetTodayEarnings {
  getTodayEarnings: GetTodayEarnings_getTodayEarnings;
}
