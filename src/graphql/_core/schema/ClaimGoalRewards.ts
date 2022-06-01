/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GoalRewardStatus, ContentItemRowIconTextBannerType, GoalActionType, SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ClaimGoalRewards
// ====================================================

export interface ClaimGoalRewards_claimGoalRewards_headerImage {
  id: string;
  uri: string | null;
}

export interface ClaimGoalRewards_claimGoalRewards_rewards_itemBackground {
  id: string;
  uri: string | null;
}

export interface ClaimGoalRewards_claimGoalRewards_rewards_item {
  id: string;
  uri: string | null;
}

export interface ClaimGoalRewards_claimGoalRewards_rewards_stars {
  id: string;
  uri: string | null;
}

export interface ClaimGoalRewards_claimGoalRewards_rewards_infoBadgeUri {
  id: string;
  uri: string | null;
}

export interface ClaimGoalRewards_claimGoalRewards_rewards {
  id: string;
  goalId: string;
  title: string;
  description: string | null;
  itemBackground: ClaimGoalRewards_claimGoalRewards_rewards_itemBackground;
  item: ClaimGoalRewards_claimGoalRewards_rewards_item;
  status: GoalRewardStatus;
  stars: ClaimGoalRewards_claimGoalRewards_rewards_stars[] | null;
  animated: boolean;
  infoText: string | null;
  infoBadgeUri: ClaimGoalRewards_claimGoalRewards_rewards_infoBadgeUri | null;
}

export interface ClaimGoalRewards_claimGoalRewards_progressIcon {
  uri: string | null;
}

export interface ClaimGoalRewards_claimGoalRewards_about {
  title: string | null;
  markdown: string | null;
}

export interface ClaimGoalRewards_claimGoalRewards_faq_icon {
  id: string;
  uri: string | null;
}

export interface ClaimGoalRewards_claimGoalRewards_faq {
  text: string;
  icon: ClaimGoalRewards_claimGoalRewards_faq_icon;
}

export interface ClaimGoalRewards_claimGoalRewards_infoCards_icon {
  id: string;
  uri: string | null;
}

export interface ClaimGoalRewards_claimGoalRewards_infoCards_styles {
  property: string;
  value: string;
}

export interface ClaimGoalRewards_claimGoalRewards_infoCards {
  icon: ClaimGoalRewards_claimGoalRewards_infoCards_icon;
  title: string;
  description: string;
  styles: ClaimGoalRewards_claimGoalRewards_infoCards_styles[] | null;
}

export interface ClaimGoalRewards_claimGoalRewards_banner_icon {
  id: string;
  uri: string | null;
}

export interface ClaimGoalRewards_claimGoalRewards_banner_styles {
  property: string;
  value: string;
}

export interface ClaimGoalRewards_claimGoalRewards_banner {
  id: string;
  icon: ClaimGoalRewards_claimGoalRewards_banner_icon;
  /**
   * determines client-side style template e.g. error for red
   */
  type: ContentItemRowIconTextBannerType;
  styles: ClaimGoalRewards_claimGoalRewards_banner_styles[] | null;
  markdown: string;
}

export interface ClaimGoalRewards_claimGoalRewards_button_onPress {
  goalType: GoalActionType | null;
  sduiType: SduiActionType | null;
  payload: string | null;
}

export interface ClaimGoalRewards_claimGoalRewards_button {
  label: string;
  onPress: ClaimGoalRewards_claimGoalRewards_button_onPress | null;
  shadowColor: string | null;
  backgroundColor: string | null;
}

export interface ClaimGoalRewards_claimGoalRewards {
  title: string;
  labels: string[] | null;
  headerImage: ClaimGoalRewards_claimGoalRewards_headerImage;
  headerBackgroundColor: string;
  headerTextColor: string;
  rewards: ClaimGoalRewards_claimGoalRewards_rewards[];
  progressUnit: string;
  currentProgress: number;
  maxProgress: number;
  progressIcon: ClaimGoalRewards_claimGoalRewards_progressIcon;
  milestones: number[];
  about: ClaimGoalRewards_claimGoalRewards_about | null;
  faq: ClaimGoalRewards_claimGoalRewards_faq | null;
  infoCards: ClaimGoalRewards_claimGoalRewards_infoCards[] | null;
  banner: ClaimGoalRewards_claimGoalRewards_banner | null;
  button: ClaimGoalRewards_claimGoalRewards_button | null;
}

export interface ClaimGoalRewards {
  claimGoalRewards: ClaimGoalRewards_claimGoalRewards | null;
}

export interface ClaimGoalRewardsVariables {
  rewardIds: string[];
}
