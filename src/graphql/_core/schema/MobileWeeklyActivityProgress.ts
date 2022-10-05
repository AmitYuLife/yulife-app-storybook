/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MobileWeeklyActivityProgress
// ====================================================

export interface MobileWeeklyActivityProgress_iconUrl {
  id: string;
  uri: string | null;
}

export interface MobileWeeklyActivityProgress {
  id: string;
  activitySubTotal: string;
  yuCoinSubTotal: string;
  currentPosition: number;
  maxLength: number;
  isClaimable: boolean;
  isClaimed: boolean;
  isJoined: boolean;
  iconUrl: MobileWeeklyActivityProgress_iconUrl;
}
