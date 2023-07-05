/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { TopBarType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetQuestMapLevelChallengeDetails
// ====================================================

export interface GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_progressBar {
  name: string;
  barColor: string;
  goalTextColor: string;
  progressColor: string;
  progressGoalEmpty: string;
  progressGoalFilled: string;
  progressStarEmpty: string;
  progressStarFilled: string;
  progressTextColor: string;
}

export interface GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_assets_backgroundImage {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_assets_detailsImage {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_assets_tileImage {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_assets_historyImage {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_assets {
  backgroundImage: GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_assets_backgroundImage;
  detailsImage: GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_assets_detailsImage;
  tileImage: GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_assets_tileImage;
  historyImage: GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_assets_historyImage;
}

export interface GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_actionStyles {
  primaryColour: string;
  secondaryColour: string;
}

export interface GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails {
  id: string;
  heading: string;
  backgroundColour: string;
  progressBar: GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_progressBar;
  assets: GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_assets;
  topBarType: TopBarType;
  actionStyles: GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails_actionStyles;
}

export interface GetQuestMapLevelChallengeDetails {
  getQuestMapLevelChallengeDetails: GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails;
}

export interface GetQuestMapLevelChallengeDetailsVariables {
  levelSlotId: string;
}
