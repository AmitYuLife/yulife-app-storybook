/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetGoalMilestoneDetailsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetGoalMilestoneDetails
// ====================================================

export interface GetGoalMilestoneDetails_getGoalMilestoneDetails_list_image {
  id: string;
  uri: string | null;
}

export interface GetGoalMilestoneDetails_getGoalMilestoneDetails_list_theme {
  primaryColor: string;
  secondaryColor: string;
}

export interface GetGoalMilestoneDetails_getGoalMilestoneDetails_list {
  rewardTitle: string;
  progress: number;
  target: number;
  rewardQuantity: number;
  image: GetGoalMilestoneDetails_getGoalMilestoneDetails_list_image;
  theme: GetGoalMilestoneDetails_getGoalMilestoneDetails_list_theme;
}

export interface GetGoalMilestoneDetails_getGoalMilestoneDetails_hint_image {
  id: string;
  uri: string | null;
}

export interface GetGoalMilestoneDetails_getGoalMilestoneDetails_hint {
  label: string | null;
  description: string | null;
  image: GetGoalMilestoneDetails_getGoalMilestoneDetails_hint_image | null;
}

export interface GetGoalMilestoneDetails_getGoalMilestoneDetails {
  list: GetGoalMilestoneDetails_getGoalMilestoneDetails_list[];
  hint: GetGoalMilestoneDetails_getGoalMilestoneDetails_hint | null;
}

export interface GetGoalMilestoneDetails {
  getGoalMilestoneDetails: GetGoalMilestoneDetails_getGoalMilestoneDetails;
}

export interface GetGoalMilestoneDetailsVariables {
  goals?: (GetGoalMilestoneDetailsInput | null)[] | null;
}
