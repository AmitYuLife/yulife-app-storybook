/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GoalRewardStatus, ContentItemRowIconTextBannerType, GoalActionType, SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: GoalDetails
// ====================================================

export interface GoalDetails_headerImage {
  id: string;
  uri: string | null;
}

export interface GoalDetails_rewards_itemBackground {
  id: string;
  uri: string | null;
}

export interface GoalDetails_rewards_item {
  id: string;
  uri: string | null;
}

export interface GoalDetails_rewards_stars {
  id: string;
  uri: string | null;
}

export interface GoalDetails_rewards_infoBadgeUri {
  id: string;
  uri: string | null;
}

export interface GoalDetails_rewards {
  id: string;
  goalId: string;
  title: string;
  description: string | null;
  itemBackground: GoalDetails_rewards_itemBackground;
  item: GoalDetails_rewards_item;
  status: GoalRewardStatus;
  stars: GoalDetails_rewards_stars[] | null;
  animated: boolean;
  infoText: string | null;
  infoBadgeUri: GoalDetails_rewards_infoBadgeUri | null;
}

export interface GoalDetails_progressIcon {
  uri: string | null;
}

export interface GoalDetails_about {
  title: string | null;
  markdown: string | null;
}

export interface GoalDetails_faq_icon {
  id: string;
  uri: string | null;
}

export interface GoalDetails_faq {
  text: string;
  icon: GoalDetails_faq_icon;
}

export interface GoalDetails_infoCards_icon {
  id: string;
  uri: string | null;
}

export interface GoalDetails_infoCards_styles {
  property: string;
  value: string;
}

export interface GoalDetails_infoCards {
  icon: GoalDetails_infoCards_icon;
  title: string;
  description: string;
  styles: GoalDetails_infoCards_styles[] | null;
}

export interface GoalDetails_banner_icon {
  id: string;
  uri: string | null;
}

export interface GoalDetails_banner_styles {
  property: string;
  value: string;
}

export interface GoalDetails_banner {
  id: string;
  icon: GoalDetails_banner_icon;
  /**
   * determines client-side style template e.g. error for red
   */
  type: ContentItemRowIconTextBannerType;
  styles: GoalDetails_banner_styles[] | null;
  markdown: string;
}

export interface GoalDetails_button_onPress {
  goalType: GoalActionType | null;
  sduiType: SduiActionType | null;
  payload: string | null;
}

export interface GoalDetails_button {
  label: string;
  onPress: GoalDetails_button_onPress | null;
  shadowColor: string | null;
  backgroundColor: string | null;
}

export interface GoalDetails {
  title: string;
  labels: string[] | null;
  headerImage: GoalDetails_headerImage;
  headerBackgroundColor: string;
  headerTextColor: string;
  rewards: GoalDetails_rewards[];
  progressUnit: string;
  currentProgress: number;
  maxProgress: number;
  progressIcon: GoalDetails_progressIcon;
  milestones: number[];
  about: GoalDetails_about | null;
  faq: GoalDetails_faq | null;
  infoCards: GoalDetails_infoCards[] | null;
  banner: GoalDetails_banner | null;
  button: GoalDetails_button | null;
}
