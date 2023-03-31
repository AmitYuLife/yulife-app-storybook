/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FitKitType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetQuestMapLevel
// ====================================================

export interface GetQuestMapLevel_getQuestMapLevel_slots_image {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_historyImage {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_details_image {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_details_milestones {
  id: string;
  target: string;
  rewardAmount: number;
  rewardType: string;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_logo {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons_logo {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons_options {
  iosUrl: string;
  androidUrl: string;
  appName: string;
  appStoreId: string;
  appStoreLocale: string;
  playStoreId: string;
  faqUrl: string;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons {
  title: string;
  color: string;
  logo: GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons_logo;
  width: number;
  height: number;
  options: GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons_options | null;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_promotionReward_logo {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_promotionReward_backgroundImage {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_promotionReward {
  title: string;
  description: string;
  logo: GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_promotionReward_logo;
  backgroundImage: GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_promotionReward_backgroundImage;
  discount: string;
  buttonLabel: string;
  rewardId: string;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent {
  contentType: string;
  contentMediaTags: string[];
  title: string;
  description: string;
  logo: GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_logo;
  buttons: GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons[];
  promotionReward: GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_promotionReward | null;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_details {
  heading: string;
  tutorialUrl: string | null;
  image: GetQuestMapLevel_getQuestMapLevel_slots_details_image;
  milestones: (GetQuestMapLevel_getQuestMapLevel_slots_details_milestones | null)[] | null;
  internalContent: GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent[] | null;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_challenges {
  id: string;
  reward: string;
  rating: number;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots {
  __typename: "QuestMapLevelSlot";
  id: string;
  heading: string;
  duration: string;
  image: GetQuestMapLevel_getQuestMapLevel_slots_image;
  historyImage: GetQuestMapLevel_getQuestMapLevel_slots_historyImage;
  availableAtLevel: number;
  isLocked: boolean;
  isCompleted: boolean;
  reward: string | null;
  fitKitTypes: FitKitType[];
  type: string | null;
  subtype: string | null;
  details: GetQuestMapLevel_getQuestMapLevel_slots_details | null;
  challenges: (GetQuestMapLevel_getQuestMapLevel_slots_challenges | null)[] | null;
}

export interface GetQuestMapLevel_getQuestMapLevel {
  id: string;
  __typename: "QuestMapLevel";
  level: number;
  levelChest: string | null;
  slots: (GetQuestMapLevel_getQuestMapLevel_slots | null)[];
}

export interface GetQuestMapLevel {
  getQuestMapLevel: GetQuestMapLevel_getQuestMapLevel;
}

export interface GetQuestMapLevelVariables {
  level: number;
  yuniversalMap?: number | null;
}
