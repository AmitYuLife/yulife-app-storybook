/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMobileGameWeeklies
// ====================================================

export interface GetMobileGameWeeklies_getMobileGameWeeklies_activityProgress_iconUrl {
  id: string;
  uri: string | null;
}

export interface GetMobileGameWeeklies_getMobileGameWeeklies_activityProgress {
  id: string;
  activitySubTotal: string;
  yuCoinSubTotal: string;
  currentPosition: number;
  maxLength: number;
  isClaimable: boolean;
  isClaimed: boolean;
  iconUrl: GetMobileGameWeeklies_getMobileGameWeeklies_activityProgress_iconUrl;
}

export interface GetMobileGameWeeklies_getMobileGameWeeklies {
  id: string;
  endDateTime: string | null;
  hasUnclaimedRewards: boolean;
  activityProgress: GetMobileGameWeeklies_getMobileGameWeeklies_activityProgress[];
}

export interface GetMobileGameWeeklies {
  getMobileGameWeeklies: GetMobileGameWeeklies_getMobileGameWeeklies;
}
