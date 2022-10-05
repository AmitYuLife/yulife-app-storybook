/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetQuestMap
// ====================================================

export interface GetQuestMap_levels {
  id: string;
  __typename: "QuestMapLevelListItem";
  level: number;
  rating: number | null;
  levelChest: string | null;
}

export interface GetQuestMap_weeklies_activityProgress_iconUrl {
  id: string;
  uri: string | null;
}

export interface GetQuestMap_weeklies_activityProgress {
  id: string;
  activitySubTotal: string;
  yuCoinSubTotal: string;
  currentPosition: number;
  maxLength: number;
  isClaimable: boolean;
  isClaimed: boolean;
  isJoined: boolean;
  iconUrl: GetQuestMap_weeklies_activityProgress_iconUrl;
}

export interface GetQuestMap_weeklies {
  id: string;
  endDateTime: string | null;
  hasUnclaimedRewards: boolean;
  hasJoined: boolean;
  activityProgress: GetQuestMap_weeklies_activityProgress[];
}

export interface GetQuestMap {
  levels: GetQuestMap_levels[];
  weeklies: GetQuestMap_weeklies;
}
