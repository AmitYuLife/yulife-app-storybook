/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FitKitType, RewardsChestType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateQuestMapLevelChallenge
// ====================================================

export interface CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_challenge {
  level: number | null;
  levelSlotId: string | null;
  status: string | null;
  startDateTime: string | null;
  endDateTime: string | null;
}

export interface CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
}

export interface CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_levelSlot_milestones_target | null;
}

export interface CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  shouldEndOnLastGoalAchieved: boolean | null;
  fitKitTypes: FitKitType[] | null;
  milestones: (CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_levelSlot_milestones | null)[] | null;
}

export interface CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_chest {
  type: string | null;
  value: number | null;
}

export interface CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest_items_icon {
  id: string;
  uri: string | null;
}

export interface CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest_items_tooltip {
  title: string;
  description: string;
  cta: string;
}

export interface CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest_items {
  icon: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest_items_icon;
  description: string;
  backgroundColour: string;
  shadowColour: string;
  textColour: string;
  starColour: string | null;
  tooltip: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest_items_tooltip | null;
}

export interface CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest {
  chestType: RewardsChestType;
  title: string;
  items: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest_items[];
}

export interface CreateQuestMapLevelChallenge_createQuestMapLevelChallenge {
  challenge: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_challenge | null;
  levelSlot: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_levelSlot | null;
  nextLevelAvailableAt: string | null;
  chest: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_chest | null;
  yuniversalChest: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest | null;
}

export interface CreateQuestMapLevelChallenge {
  createQuestMapLevelChallenge: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge | null;
}

export interface CreateQuestMapLevelChallengeVariables {
  levelSlotId: string;
  contentId?: string | null;
}
