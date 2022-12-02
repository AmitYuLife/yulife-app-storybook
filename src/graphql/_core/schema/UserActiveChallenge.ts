/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FitKitType } from "./globalTypes";

// ====================================================
// GraphQL fragment: UserActiveChallenge
// ====================================================

export interface UserActiveChallenge_challenge_incomingData {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
}

export interface UserActiveChallenge_challenge {
  id: string | null;
  level: number | null;
  levelSlotId: string | null;
  status: string | null;
  endDateTime: string | null;
  startDateTime: string | null;
  rating: number | null;
  subtype: string | null;
  yuCoinAwarded: number | null;
  incomingData: UserActiveChallenge_challenge_incomingData | null;
}

export interface UserActiveChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
}

export interface UserActiveChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: UserActiveChallenge_levelSlot_milestones_target | null;
}

export interface UserActiveChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  shouldEndOnLastGoalAchieved: boolean | null;
  fitKitTypes: FitKitType[] | null;
  milestones: (UserActiveChallenge_levelSlot_milestones | null)[] | null;
}

export interface UserActiveChallenge {
  challenge: UserActiveChallenge_challenge | null;
  levelSlot: UserActiveChallenge_levelSlot | null;
}
