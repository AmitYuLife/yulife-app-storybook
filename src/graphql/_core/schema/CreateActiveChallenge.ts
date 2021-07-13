/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FitKitType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateActiveChallenge
// ====================================================

export interface CreateActiveChallenge_createActiveChallenge_challenge {
  level: number | null;
  levelSlotId: string | null;
  status: string | null;
  startDateTime: string | null;
  endDateTime: string | null;
}

export interface CreateActiveChallenge_createActiveChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
}

export interface CreateActiveChallenge_createActiveChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: CreateActiveChallenge_createActiveChallenge_levelSlot_milestones_target | null;
}

export interface CreateActiveChallenge_createActiveChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  shouldEndOnLastGoalAchieved: boolean | null;
  fitKitTypes: FitKitType[] | null;
  milestones: (CreateActiveChallenge_createActiveChallenge_levelSlot_milestones | null)[] | null;
}

export interface CreateActiveChallenge_createActiveChallenge_chest {
  type: string | null;
  value: number | null;
}

export interface CreateActiveChallenge_createActiveChallenge {
  challenge: CreateActiveChallenge_createActiveChallenge_challenge | null;
  levelSlot: CreateActiveChallenge_createActiveChallenge_levelSlot | null;
  nextLevelAvailableAt: string | null;
  chest: CreateActiveChallenge_createActiveChallenge_chest | null;
}

export interface CreateActiveChallenge {
  createActiveChallenge: CreateActiveChallenge_createActiveChallenge | null;
}

export interface CreateActiveChallengeVariables {
  levelSlotId: string;
}
