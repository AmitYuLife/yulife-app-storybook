/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetMobileRewardsGoalProductMilestones
// ====================================================

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_backgroundImage {
  id: string;
  uri: string | null;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_challenges_icon {
  id: string;
  uri: string | null;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_challenges {
  icon: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_challenges_icon;
  description: string;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_progressBar {
  current: number;
  max: number;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_milestones {
  value: number;
  shouldAttractAttention: boolean | null;
  rewardClaimed: boolean | null;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_tags_icon {
  id: string;
  uri: string | null;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_tags {
  tag: string;
  icon: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_tags_icon;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones {
  title: string;
  backgroundImage: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_backgroundImage | null;
  challenges: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_challenges[];
  progressBar: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_progressBar;
  milestones: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_milestones[];
  fontColor: string;
  backgroundColor: string;
  borderColor: string;
  tags: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_tags;
  sduiAction: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones_sduiAction | null;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_hint_hintImage {
  id: string;
  uri: string | null;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_hint_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_hint_styles {
  property: string;
  value: string;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_hint {
  id: string;
  hintTitle: string;
  contentItemHintDescription: string;
  hintImage: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_hint_hintImage;
  onPress: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_hint_onPress | null;
  styles: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_hint_styles[] | null;
}

export interface GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones {
  goalProductMilestones: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_goalProductMilestones | null;
  hint: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones_hint | null;
}

export interface GetMobileRewardsGoalProductMilestones {
  getMobileRewardsGoalProductMilestones: GetMobileRewardsGoalProductMilestones_getMobileRewardsGoalProductMilestones;
}
