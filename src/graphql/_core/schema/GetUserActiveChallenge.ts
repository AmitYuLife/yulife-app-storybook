/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FitKitType, YuHealthOptions } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUserActiveChallenge
// ====================================================

export interface GetUserActiveChallenge_getUserActiveChallenge_challenge_incomingData {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
  calories: number | null;
}

export interface GetUserActiveChallenge_getUserActiveChallenge_challenge {
  id: string | null;
  level: number | null;
  levelSlotId: string | null;
  status: string | null;
  endDateTime: string | null;
  startDateTime: string | null;
  rating: number | null;
  subtype: string | null;
  yuCoinAwarded: number | null;
  incomingData: GetUserActiveChallenge_getUserActiveChallenge_challenge_incomingData | null;
}

export interface GetUserActiveChallenge_getUserActiveChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
  calories: number | null;
}

export interface GetUserActiveChallenge_getUserActiveChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: GetUserActiveChallenge_getUserActiveChallenge_levelSlot_milestones_target | null;
}

export interface GetUserActiveChallenge_getUserActiveChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  shouldEndOnLastGoalAchieved: boolean | null;
  fitKitTypes: FitKitType[] | null;
  yuHealth: YuHealthOptions | null;
  milestones: (GetUserActiveChallenge_getUserActiveChallenge_levelSlot_milestones | null)[] | null;
}

export interface GetUserActiveChallenge_getUserActiveChallenge {
  challenge: GetUserActiveChallenge_getUserActiveChallenge_challenge | null;
  levelSlot: GetUserActiveChallenge_getUserActiveChallenge_levelSlot | null;
}

export interface GetUserActiveChallenge {
  getUserActiveChallenge: GetUserActiveChallenge_getUserActiveChallenge | null;
}
