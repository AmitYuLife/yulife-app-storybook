/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentLevel
// ====================================================

export interface GetCurrentLevel_getCurrentLevel_slots_milestones_target {
  __typename: "MilestoneTarget";
  steps: number | null;
  meditation: number | null;
}

export interface GetCurrentLevel_getCurrentLevel_slots_milestones {
  id: string | null;
  __typename: "LevelSlotMilestone";
  XP: number | null;
  coins: number | null;
  target: GetCurrentLevel_getCurrentLevel_slots_milestones_target | null;
}

export interface GetCurrentLevel_getCurrentLevel_slots {
  id: string | null;
  __typename: "LevelSlot";
  availableAtLevel: number | null;
  timeLimit: number | null;
  passive: boolean | null;
  type: string | null;
  subtype: string | null;
  unit: string | null;
  rating: number | null;
  yuCoinAwarded: number | null;
  milestones: (GetCurrentLevel_getCurrentLevel_slots_milestones | null)[] | null;
}

export interface GetCurrentLevel_getCurrentLevel {
  id: string | null;
  __typename: "Level";
  level: number | null;
  levelChestId: string | null;
  name: string | null;
  rating: number | null;
  slots: (GetCurrentLevel_getCurrentLevel_slots | null)[] | null;
}

export interface GetCurrentLevel {
  getCurrentLevel: GetCurrentLevel_getCurrentLevel | null;
}
