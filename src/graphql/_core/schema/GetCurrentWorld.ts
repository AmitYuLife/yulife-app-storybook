/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentWorld
// ====================================================

export interface GetCurrentWorld_getCurrentWorld_slots_challengesDetails {
  id: string | null;
  rating: number | null;
  yuCoinAwarded: number | null;
}

export interface GetCurrentWorld_getCurrentWorld_slots_milestones_target {
  __typename: "MilestoneTarget";
  steps: number | null;
  meditation: number | null;
  distance: number | null;
}

export interface GetCurrentWorld_getCurrentWorld_slots_milestones {
  id: string | null;
  __typename: "LevelSlotMilestone";
  XP: number | null;
  coins: number | null;
  target: GetCurrentWorld_getCurrentWorld_slots_milestones_target | null;
}

export interface GetCurrentWorld_getCurrentWorld_slots {
  id: string | null;
  __typename: "LevelSlot";
  availableAtLevel: number | null;
  timeLimit: number | null;
  passive: boolean | null;
  type: string | null;
  subtype: string | null;
  unit: string | null;
  challengesDetails: (GetCurrentWorld_getCurrentWorld_slots_challengesDetails | null)[] | null;
  milestones: (GetCurrentWorld_getCurrentWorld_slots_milestones | null)[] | null;
}

export interface GetCurrentWorld_getCurrentWorld {
  id: string | null;
  __typename: "Level";
  level: number | null;
  levelChestId: string | null;
  name: string | null;
  rating: number | null;
  slots: (GetCurrentWorld_getCurrentWorld_slots | null)[] | null;
}

export interface GetCurrentWorld {
  getCurrentWorld: (GetCurrentWorld_getCurrentWorld | null)[] | null;
}
