/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChallengePayload, FitKitType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateActiveChallenge
// ====================================================

export interface UpdateActiveChallenge_updateActiveChallenge_challenge_incomingData {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge_challenge_milestoneLog_data {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge_challenge_milestoneLog {
  data: UpdateActiveChallenge_updateActiveChallenge_challenge_milestoneLog_data | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge_challenge {
  level: number | null;
  levelSlotId: string | null;
  status: string | null;
  endDateTime: string | null;
  incomingData: UpdateActiveChallenge_updateActiveChallenge_challenge_incomingData | null;
  milestoneLog: (UpdateActiveChallenge_updateActiveChallenge_challenge_milestoneLog | null)[] | null;
  yuCoinAwarded: number | null;
  rating: number | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: UpdateActiveChallenge_updateActiveChallenge_levelSlot_milestones_target | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  fitKitTypes: FitKitType[] | null;
  shouldEndOnLastGoalAchieved: boolean | null;
  milestones: (UpdateActiveChallenge_updateActiveChallenge_levelSlot_milestones | null)[] | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge {
  challenge: UpdateActiveChallenge_updateActiveChallenge_challenge | null;
  levelSlot: UpdateActiveChallenge_updateActiveChallenge_levelSlot | null;
  nextLevelAvailableAt: string | null;
}

export interface UpdateActiveChallenge {
  updateActiveChallenge: UpdateActiveChallenge_updateActiveChallenge | null;
}

export interface UpdateActiveChallengeVariables {
  levelSlotId: string;
  payload?: ChallengePayload | null;
}
