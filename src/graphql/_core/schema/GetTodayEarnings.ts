/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType, ContentItemButtonType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetTodayEarnings
// ====================================================

export interface GetTodayEarnings_getTodayEarnings_header {
  yuCoinToday: string | null;
  yuCoinPower: number | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_wellDoneBanner {
  uri: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_button_onPress {
  type: SduiActionType;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_button {
  label: string;
  onPress: GetTodayEarnings_getTodayEarnings_activityFeed_button_onPress | null;
  type: ContentItemButtonType | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_toast_iconUrl {
  uri: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_toast {
  backgroundColor: string | null;
  borderColor: string | null;
  description: string | null;
  iconUrl: GetTodayEarnings_getTodayEarnings_activityFeed_toast_iconUrl | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_iconUrl {
  uri: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_body_iconUrl {
  uri: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_body {
  title: string | null;
  iconUrl: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_body_iconUrl | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast_iconUrl {
  uri: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast {
  backgroundColor: string | null;
  borderColor: string | null;
  description: string | null;
  iconUrl: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast_iconUrl | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal {
  header: string;
  iconUrl: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_iconUrl | null;
  body: (GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_body | null)[] | null;
  toast: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_activityProgress_iconUrl {
  uri: string | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed_activityProgress {
  type: string | null;
  activitySubTotal: string | null;
  yuCoinSubTotal: string | null;
  rating: number | null;
  maxLength: number | null;
  currentPosition: number | null;
  iconUrl: GetTodayEarnings_getTodayEarnings_activityFeed_activityProgress_iconUrl | null;
}

export interface GetTodayEarnings_getTodayEarnings_activityFeed {
  id: string | null;
  title: string | null;
  emptyMessage: string | null;
  wellDoneBanner: GetTodayEarnings_getTodayEarnings_activityFeed_wellDoneBanner | null;
  button: GetTodayEarnings_getTodayEarnings_activityFeed_button | null;
  toast: GetTodayEarnings_getTodayEarnings_activityFeed_toast | null;
  questionMarkModal: GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal | null;
  activityProgress: (GetTodayEarnings_getTodayEarnings_activityFeed_activityProgress | null)[] | null;
}

export interface GetTodayEarnings_getTodayEarnings {
  header: GetTodayEarnings_getTodayEarnings_header;
  activityFeed: (GetTodayEarnings_getTodayEarnings_activityFeed | null)[] | null;
}

export interface GetTodayEarnings {
  getTodayEarnings: GetTodayEarnings_getTodayEarnings | null;
}
