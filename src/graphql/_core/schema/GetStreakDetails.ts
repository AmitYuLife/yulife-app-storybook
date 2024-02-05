/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStreakDetails
// ====================================================

export interface GetStreakDetails_getStreakDetails_hint_image {
  id: string;
  uri: string | null;
}

export interface GetStreakDetails_getStreakDetails_hint {
  label: string | null;
  description: string | null;
  image: GetStreakDetails_getStreakDetails_hint_image | null;
}

export interface GetStreakDetails_getStreakDetails_goalMilestone_image {
  id: string;
  uri: string | null;
}

export interface GetStreakDetails_getStreakDetails_goalMilestone_theme {
  primaryColor: string;
  secondaryColor: string;
}

export interface GetStreakDetails_getStreakDetails_goalMilestone {
  rewardTitle: string;
  progress: number;
  target: number;
  rewardQuantity: number;
  showSparks: boolean | null;
  image: GetStreakDetails_getStreakDetails_goalMilestone_image;
  theme: GetStreakDetails_getStreakDetails_goalMilestone_theme;
}

export interface GetStreakDetails_getStreakDetails {
  teaserTitle: string | null;
  hint: GetStreakDetails_getStreakDetails_hint | null;
  goalMilestone: GetStreakDetails_getStreakDetails_goalMilestone | null;
}

export interface GetStreakDetails {
  /**
   * Get user streak details
   */
  getStreakDetails: GetStreakDetails_getStreakDetails | null;
}
