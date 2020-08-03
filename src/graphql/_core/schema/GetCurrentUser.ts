/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IntercomHashMethod } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetCurrentUser
// ====================================================

export interface GetCurrentUser_getCurrentUser_business {
  businessAccountName: string | null;
  alpha: boolean | null;
  isGroup: boolean | null;
  isWellbeingAccess: boolean | null;
}

export interface GetCurrentUser_getCurrentUser_connections {
  name: string | null;
  isConnected: boolean | null;
  lastUpdated: number | null;
}

export interface GetCurrentUser_getCurrentUser_userFeatures {
  name: string | null;
  value: boolean | null;
}

export interface GetCurrentUser_getCurrentUser_mobileConsent {
  mobileHealth: boolean | null;
  marketing: boolean | null;
  pushNotifications: boolean | null;
  companyLeaderboard: boolean | null;
  workspaceLeaderboard: boolean | null;
}

export interface GetCurrentUser_getCurrentUser_coinLedger {
  currentBalance: number | null;
  currentLevel: number | null;
  nextLevelAvailableAt: string | null;
}

export interface GetCurrentUser_getCurrentUser_passiveSteps_exchange {
  yucoin: number | null;
  steps: number | null;
  meditation: number | null;
  surge: number | null;
}

export interface GetCurrentUser_getCurrentUser_passiveSteps {
  exchange: GetCurrentUser_getCurrentUser_passiveSteps_exchange | null;
  isMainSurge: boolean | null;
}

export interface GetCurrentUser_getCurrentUser_passiveMeditation_exchange {
  yucoin: number | null;
  steps: number | null;
  meditation: number | null;
  surge: number | null;
}

export interface GetCurrentUser_getCurrentUser_passiveMeditation_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
}

export interface GetCurrentUser_getCurrentUser_passiveMeditation_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: GetCurrentUser_getCurrentUser_passiveMeditation_levelSlot_milestones_target | null;
}

export interface GetCurrentUser_getCurrentUser_passiveMeditation_levelSlot {
  subtype: string | null;
  unit: string | null;
  milestones: (GetCurrentUser_getCurrentUser_passiveMeditation_levelSlot_milestones | null)[] | null;
}

export interface GetCurrentUser_getCurrentUser_passiveMeditation {
  exchange: GetCurrentUser_getCurrentUser_passiveMeditation_exchange | null;
  levelSlot: GetCurrentUser_getCurrentUser_passiveMeditation_levelSlot | null;
  isMainSurge: boolean | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge_challenge_incomingData {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge_challenge {
  level: number | null;
  levelSlotId: string | null;
  status: string | null;
  endDateTime: string | null;
  startDateTime: string | null;
  rating: number | null;
  subtype: string | null;
  incomingData: GetCurrentUser_getCurrentUser_activeChallenge_challenge_incomingData | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: GetCurrentUser_getCurrentUser_activeChallenge_levelSlot_milestones_target | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  milestones: (GetCurrentUser_getCurrentUser_activeChallenge_levelSlot_milestones | null)[] | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge {
  challenge: GetCurrentUser_getCurrentUser_activeChallenge_challenge | null;
  levelSlot: GetCurrentUser_getCurrentUser_activeChallenge_levelSlot | null;
}

export interface GetCurrentUser_getCurrentUser_activeStreak {
  id: string | null;
  type: string | null;
  value: number | null;
  maxStreak: number | null;
  streakAwardId: string | null;
  streak: number | null;
  nextStreakAvailableAt: string | null;
}

export interface GetCurrentUser_getCurrentUser_todayActivity {
  id: string | null;
  earned: number | null;
  milestones: number | null;
  name: string | null;
  score: string | null;
}

export interface GetCurrentUser_getCurrentUser_leaderboards {
  leaderboardId: string | null;
  name: string | null;
  consent: boolean | null;
  hasAccepted: boolean | null;
  inviteFrom: string | null;
}

export interface GetCurrentUser_getCurrentUser {
  __typename: "User";
  id: string | null;
  archived: boolean | null;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: string | null;
  createdAt: string | null;
  onboardingDate: string | null;
  redeemedOnboarding: boolean | null;
  businessAccountId: string | null;
  business: GetCurrentUser_getCurrentUser_business | null;
  wootricId: string | null;
  membershipType: string | null;
  challengesDoneToday: number | null;
  connections: (GetCurrentUser_getCurrentUser_connections | null)[] | null;
  userFeatures: (GetCurrentUser_getCurrentUser_userFeatures | null)[] | null;
  mobileConsent: GetCurrentUser_getCurrentUser_mobileConsent | null;
  coinLedger: GetCurrentUser_getCurrentUser_coinLedger | null;
  passiveSteps: GetCurrentUser_getCurrentUser_passiveSteps | null;
  passiveMeditation: GetCurrentUser_getCurrentUser_passiveMeditation | null;
  activeChallenge: GetCurrentUser_getCurrentUser_activeChallenge | null;
  activeStreak: GetCurrentUser_getCurrentUser_activeStreak | null;
  todayActivity: (GetCurrentUser_getCurrentUser_todayActivity | null)[] | null;
  leaderboards: (GetCurrentUser_getCurrentUser_leaderboards | null)[] | null;
}

export interface GetCurrentUser {
  getIntercomHash: string | null;
  getCurrentUser: GetCurrentUser_getCurrentUser | null;
}

export interface GetCurrentUserVariables {
  intercomHashMethod: IntercomHashMethod;
}
