/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RewardsChestType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUnityRewards
// ====================================================

export interface GetUnityRewards_getUnityRewards_intro {
  heading: string;
  subHeading: string | null;
  cta: string | null;
}

export interface GetUnityRewards_getUnityRewards_congratulatory {
  heading: string | null;
  title: string;
  description: string;
  cta: string;
}

export interface GetUnityRewards_getUnityRewards_chest_items_icon {
  id: string;
  uri: string | null;
}

export interface GetUnityRewards_getUnityRewards_chest_items_tooltip {
  title: string;
  description: string;
  cta: string;
}

export interface GetUnityRewards_getUnityRewards_chest_items {
  icon: GetUnityRewards_getUnityRewards_chest_items_icon;
  description: string;
  backgroundColour: string;
  shadowColour: string;
  textColour: string;
  starColour: string | null;
  tooltip: GetUnityRewards_getUnityRewards_chest_items_tooltip | null;
}

export interface GetUnityRewards_getUnityRewards_chest {
  chestType: RewardsChestType;
  title: string;
  items: GetUnityRewards_getUnityRewards_chest_items[];
}

export interface GetUnityRewards_getUnityRewards_afterword {
  description: string;
  cta: string;
}

export interface GetUnityRewards_getUnityRewards {
  intro: GetUnityRewards_getUnityRewards_intro;
  congratulatory: GetUnityRewards_getUnityRewards_congratulatory | null;
  chest: GetUnityRewards_getUnityRewards_chest;
  afterword: GetUnityRewards_getUnityRewards_afterword | null;
}

export interface GetUnityRewards {
  getUnityRewards: GetUnityRewards_getUnityRewards;
}

export interface GetUnityRewardsVariables {
  level: number;
}
