/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentQuestLevels
// ====================================================

export interface GetCurrentQuestLevels_getCurrentQuestLevels_slots_challengesDetails {
  id: string | null;
  rating: number | null;
  yuCoinAwarded: number | null;
}

export interface GetCurrentQuestLevels_getCurrentQuestLevels_slots_milestones_target {
  __typename: "MilestoneTarget";
  steps: number | null;
  meditation: number | null;
  distance: number | null;
}

export interface GetCurrentQuestLevels_getCurrentQuestLevels_slots_milestones {
  id: string | null;
  __typename: "LevelSlotMilestone";
  XP: number | null;
  coins: number | null;
  target: GetCurrentQuestLevels_getCurrentQuestLevels_slots_milestones_target | null;
}

export interface GetCurrentQuestLevels_getCurrentQuestLevels_slots {
  id: string | null;
  __typename: "LevelSlot";
  availableAtLevel: number | null;
  timeLimit: number | null;
  passive: boolean | null;
  type: string | null;
  subtype: string | null;
  unit: string | null;
  challengesDetails: (GetCurrentQuestLevels_getCurrentQuestLevels_slots_challengesDetails | null)[] | null;
  milestones: (GetCurrentQuestLevels_getCurrentQuestLevels_slots_milestones | null)[] | null;
}

export interface GetCurrentQuestLevels_getCurrentQuestLevels {
  id: string | null;
  __typename: "Level";
  level: number | null;
  levelChestId: string | null;
  name: string | null;
  rating: number | null;
  slots: (GetCurrentQuestLevels_getCurrentQuestLevels_slots | null)[] | null;
}

export interface GetCurrentQuestLevels {
  getCurrentQuestLevels: (GetCurrentQuestLevels_getCurrentQuestLevels | null)[] | null;
}
