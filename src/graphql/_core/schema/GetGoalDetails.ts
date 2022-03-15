/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GoalRewardStatus, ContentItemRowIconTextBannerType, GoalActionType, SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetGoalDetails
// ====================================================

export interface GetGoalDetails_getGoalDetails_headerImage {
  id: string;
  uri: string | null;
}

export interface GetGoalDetails_getGoalDetails_rewards_itemBackground {
  id: string;
  uri: string | null;
}

export interface GetGoalDetails_getGoalDetails_rewards_item {
  id: string;
  uri: string | null;
}

export interface GetGoalDetails_getGoalDetails_rewards_stars {
  id: string;
  uri: string | null;
}

export interface GetGoalDetails_getGoalDetails_rewards {
  id: string;
  title: string;
  description: string | null;
  itemBackground: GetGoalDetails_getGoalDetails_rewards_itemBackground;
  item: GetGoalDetails_getGoalDetails_rewards_item;
  status: GoalRewardStatus;
  stars: GetGoalDetails_getGoalDetails_rewards_stars[] | null;
  animated: boolean;
}

export interface GetGoalDetails_getGoalDetails_progressIcon {
  uri: string | null;
}

export interface GetGoalDetails_getGoalDetails_about {
  title: string | null;
  markdown: string | null;
}

export interface GetGoalDetails_getGoalDetails_infoCards_icon {
  id: string;
  uri: string | null;
}

export interface GetGoalDetails_getGoalDetails_infoCards_styles {
  property: string;
  value: string;
}

export interface GetGoalDetails_getGoalDetails_infoCards {
  icon: GetGoalDetails_getGoalDetails_infoCards_icon;
  title: string;
  description: string;
  styles: GetGoalDetails_getGoalDetails_infoCards_styles[] | null;
}

export interface GetGoalDetails_getGoalDetails_banner_icon {
  id: string;
  uri: string | null;
}

export interface GetGoalDetails_getGoalDetails_banner_styles {
  property: string;
  value: string;
}

export interface GetGoalDetails_getGoalDetails_banner {
  id: string;
  icon: GetGoalDetails_getGoalDetails_banner_icon;
  /**
   * determines client-side style template e.g. error for red
   */
  type: ContentItemRowIconTextBannerType;
  styles: GetGoalDetails_getGoalDetails_banner_styles[] | null;
  markdown: string;
}

export interface GetGoalDetails_getGoalDetails_button_onPress {
  goalType: GoalActionType | null;
  sduiType: SduiActionType | null;
  payload: string | null;
}

export interface GetGoalDetails_getGoalDetails_button {
  label: string;
  onPress: GetGoalDetails_getGoalDetails_button_onPress | null;
  shadowColor: string | null;
  backgroundColor: string | null;
}

export interface GetGoalDetails_getGoalDetails {
  title: string;
  labels: string[] | null;
  headerImage: GetGoalDetails_getGoalDetails_headerImage;
  headerBackgroundColor: string;
  headerTextColor: string;
  rewards: GetGoalDetails_getGoalDetails_rewards[];
  progressUnit: string;
  currentProgress: number;
  maxProgress: number;
  progressIcon: GetGoalDetails_getGoalDetails_progressIcon;
  milestones: number[];
  about: GetGoalDetails_getGoalDetails_about | null;
  infoCards: GetGoalDetails_getGoalDetails_infoCards[] | null;
  banner: GetGoalDetails_getGoalDetails_banner | null;
  button: GetGoalDetails_getGoalDetails_button | null;
}

export interface GetGoalDetails {
  getGoalDetails: GetGoalDetails_getGoalDetails | null;
}

export interface GetGoalDetailsVariables {
  id: string;
}
