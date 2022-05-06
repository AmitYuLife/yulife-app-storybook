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

export interface GetQuestMapLevel_getQuestMapLevel_slots_details {
  heading: string;
  tutorialUrl: string | null;
  image: GetQuestMapLevel_getQuestMapLevel_slots_details_image;
  milestones: (GetQuestMapLevel_getQuestMapLevel_slots_details_milestones | null)[] | null;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots_challenges {
  reward: string;
  rating: number;
}

export interface GetQuestMapLevel_getQuestMapLevel_slots {
  id: string;
  __typename: "QuestMapLevelSlot";
  heading: string;
  duration: string;
  image: GetQuestMapLevel_getQuestMapLevel_slots_image;
  historyImage: GetQuestMapLevel_getQuestMapLevel_slots_historyImage;
  availableAtLevel: number;
  isLocked: boolean;
  reward: string | null;
  fitKitTypes: FitKitType[];
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
