/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChallengePayload, FitKitType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateQuestMapLevelChallenge
// ====================================================

export interface UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge_incomingData {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
  calories: number | null;
}

export interface UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge_milestoneLog_data {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
  calories: number | null;
}

export interface UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge_milestoneLog {
  data: UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge_milestoneLog_data | null;
}

export interface UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge {
  level: number | null;
  levelSlotId: string | null;
  status: string | null;
  endDateTime: string | null;
  createdAt: number | null;
  incomingData: UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge_incomingData | null;
  milestoneLog: (UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge_milestoneLog | null)[] | null;
  yuCoinAwarded: number | null;
  rating: number | null;
}

export interface UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
  calories: number | null;
}

export interface UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_levelSlot_milestones_target | null;
}

export interface UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  fitKitTypes: FitKitType[] | null;
  shouldEndOnLastGoalAchieved: boolean | null;
  milestones: (UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_levelSlot_milestones | null)[] | null;
}

export interface UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge {
  challenge: UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge | null;
  levelSlot: UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_levelSlot | null;
  nextLevelAvailableAt: string | null;
}

export interface UpdateQuestMapLevelChallenge {
  updateQuestMapLevelChallenge: UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge | null;
}

export interface UpdateQuestMapLevelChallengeVariables {
  levelSlotId: string;
  payload?: ChallengePayload | null;
}
