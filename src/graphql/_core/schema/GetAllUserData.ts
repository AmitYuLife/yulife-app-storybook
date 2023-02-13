/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { FitKitType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetAllUserData
// ====================================================

export interface GetAllUserData_coinLedger {
  currentBalance: number | null;
  currentLevel: number | null;
  yuniversalMap: number | null;
  yuniversalLevel: number | null;
  nextLevelAvailableAt: string | null;
}

export interface GetAllUserData_todayActivity {
  id: string | null;
  earned: number | null;
  milestones: number | null;
  name: string | null;
  score: string | null;
}

export interface GetAllUserData_leaderboards {
  leaderboardId: string | null;
  name: string | null;
  metric: string | null;
  days: number | null;
  consent: boolean | null;
  hasAccepted: boolean | null;
  inviteFrom: string | null;
}

export interface GetAllUserData_activeStreak {
  id: string | null;
  type: string | null;
  value: number | null;
  maxStreak: number | null;
  streakAwardId: string | null;
  streak: number | null;
  nextStreakAvailableAt: string | null;
}

export interface GetAllUserData_activeChallenge_challenge_incomingData {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
  calories: number | null;
}

export interface GetAllUserData_activeChallenge_challenge {
  id: string | null;
  level: number | null;
  levelSlotId: string | null;
  status: string | null;
  endDateTime: string | null;
  startDateTime: string | null;
  rating: number | null;
  subtype: string | null;
  yuCoinAwarded: number | null;
  incomingData: GetAllUserData_activeChallenge_challenge_incomingData | null;
}

export interface GetAllUserData_activeChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
  calories: number | null;
}

export interface GetAllUserData_activeChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: GetAllUserData_activeChallenge_levelSlot_milestones_target | null;
}

export interface GetAllUserData_activeChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  shouldEndOnLastGoalAchieved: boolean | null;
  fitKitTypes: FitKitType[] | null;
  milestones: (GetAllUserData_activeChallenge_levelSlot_milestones | null)[] | null;
}

export interface GetAllUserData_activeChallenge {
  challenge: GetAllUserData_activeChallenge_challenge | null;
  levelSlot: GetAllUserData_activeChallenge_levelSlot | null;
}

export interface GetAllUserData {
  coinLedger: GetAllUserData_coinLedger | null;
  todayActivity: (GetAllUserData_todayActivity | null)[] | null;
  leaderboards: (GetAllUserData_leaderboards | null)[] | null;
  activeStreak: GetAllUserData_activeStreak | null;
  activeChallenge: GetAllUserData_activeChallenge | null;
}
