/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginMethod, IntercomHashMethod, FitKitType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_loginUser_user_connections {
  name: string | null;
  isConnected: boolean | null;
  lastUpdated: number | null;
}

export interface LoginUser_loginUser_user_userFeatures {
  name: string | null;
  value: boolean | null;
}

export interface LoginUser_loginUser_user_mobileConsent {
  mobileHealth: boolean | null;
  marketing: boolean | null;
  pushNotifications: boolean | null;
  companyLeaderboard: boolean | null;
  workspaceLeaderboard: boolean | null;
}

export interface LoginUser_loginUser_user_coinLedger {
  currentBalance: number | null;
  currentLevel: number | null;
  yuniversalMap: number | null;
  yuniversalLevel: number | null;
  nextLevelAvailableAt: string | null;
}

export interface LoginUser_loginUser_user_passiveSteps_exchange {
  yucoin: number | null;
  steps: number | null;
  meditation: number | null;
  surge: number | null;
}

export interface LoginUser_loginUser_user_passiveSteps_levelSlot_milestones {
  id: string | null;
  coins: number | null;
}

export interface LoginUser_loginUser_user_passiveSteps_levelSlot {
  id: string | null;
  milestones: (LoginUser_loginUser_user_passiveSteps_levelSlot_milestones | null)[] | null;
}

export interface LoginUser_loginUser_user_passiveSteps {
  exchange: LoginUser_loginUser_user_passiveSteps_exchange | null;
  levelSlot: LoginUser_loginUser_user_passiveSteps_levelSlot | null;
}

export interface LoginUser_loginUser_user_passiveMeditation_exchange {
  yucoin: number | null;
  steps: number | null;
  meditation: number | null;
  surge: number | null;
}

export interface LoginUser_loginUser_user_passiveMeditation_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
}

export interface LoginUser_loginUser_user_passiveMeditation_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: LoginUser_loginUser_user_passiveMeditation_levelSlot_milestones_target | null;
}

export interface LoginUser_loginUser_user_passiveMeditation_levelSlot {
  id: string | null;
  subtype: string | null;
  unit: string | null;
  milestones: (LoginUser_loginUser_user_passiveMeditation_levelSlot_milestones | null)[] | null;
}

export interface LoginUser_loginUser_user_passiveMeditation {
  exchange: LoginUser_loginUser_user_passiveMeditation_exchange | null;
  levelSlot: LoginUser_loginUser_user_passiveMeditation_levelSlot | null;
}

export interface LoginUser_loginUser_user_passiveCycling_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
}

export interface LoginUser_loginUser_user_passiveCycling_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: LoginUser_loginUser_user_passiveCycling_levelSlot_milestones_target | null;
}

export interface LoginUser_loginUser_user_passiveCycling_levelSlot {
  id: string | null;
  subtype: string | null;
  unit: string | null;
  milestones: (LoginUser_loginUser_user_passiveCycling_levelSlot_milestones | null)[] | null;
}

export interface LoginUser_loginUser_user_passiveCycling {
  levelSlot: LoginUser_loginUser_user_passiveCycling_levelSlot | null;
}

export interface LoginUser_loginUser_user_activeChallenge_challenge_incomingData {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
}

export interface LoginUser_loginUser_user_activeChallenge_challenge {
  id: string | null;
  level: number | null;
  levelSlotId: string | null;
  status: string | null;
  endDateTime: string | null;
  startDateTime: string | null;
  rating: number | null;
  subtype: string | null;
  yuCoinAwarded: number | null;
  incomingData: LoginUser_loginUser_user_activeChallenge_challenge_incomingData | null;
}

export interface LoginUser_loginUser_user_activeChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
  calories: number | null;
}

export interface LoginUser_loginUser_user_activeChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: LoginUser_loginUser_user_activeChallenge_levelSlot_milestones_target | null;
}

export interface LoginUser_loginUser_user_activeChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  shouldEndOnLastGoalAchieved: boolean | null;
  fitKitTypes: FitKitType[] | null;
  milestones: (LoginUser_loginUser_user_activeChallenge_levelSlot_milestones | null)[] | null;
}

export interface LoginUser_loginUser_user_activeChallenge {
  challenge: LoginUser_loginUser_user_activeChallenge_challenge | null;
  levelSlot: LoginUser_loginUser_user_activeChallenge_levelSlot | null;
}

export interface LoginUser_loginUser_user_activeStreak {
  id: string | null;
  type: string | null;
  value: number | null;
  maxStreak: number | null;
  streakAwardId: string | null;
  streak: number | null;
  nextStreakAvailableAt: string | null;
}

export interface LoginUser_loginUser_user_todayActivity {
  id: string | null;
  earned: number | null;
  milestones: number | null;
  name: string | null;
  score: string | null;
}

export interface LoginUser_loginUser_user_leaderboards {
  leaderboardId: string | null;
  name: string | null;
  metric: string | null;
  days: number | null;
  consent: boolean | null;
  hasAccepted: boolean | null;
  inviteFrom: string | null;
}

export interface LoginUser_loginUser_user {
  __typename: "User";
  id: string | null;
  archived: boolean | null;
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
  dateOfBirth: string | null;
  createdAt: string | null;
  redeemedOnboarding: boolean | null;
  businessAccountId: string | null;
  challengesDoneToday: number | null;
  dailyChallengeAmountAvailable: number | null;
  connections: (LoginUser_loginUser_user_connections | null)[] | null;
  userFeatures: (LoginUser_loginUser_user_userFeatures | null)[] | null;
  mobileConsent: LoginUser_loginUser_user_mobileConsent | null;
  coinLedger: LoginUser_loginUser_user_coinLedger | null;
  passiveSteps: LoginUser_loginUser_user_passiveSteps | null;
  passiveMeditation: LoginUser_loginUser_user_passiveMeditation | null;
  passiveCycling: LoginUser_loginUser_user_passiveCycling | null;
  activeChallenge: LoginUser_loginUser_user_activeChallenge | null;
  activeStreak: LoginUser_loginUser_user_activeStreak | null;
  todayActivity: (LoginUser_loginUser_user_todayActivity | null)[] | null;
  leaderboards: (LoginUser_loginUser_user_leaderboards | null)[] | null;
}

export interface LoginUser_loginUser {
  token: string | null;
  expiresAt: number | null;
  message: string | null;
  intercomHash: string | null;
  user: LoginUser_loginUser_user | null;
}

export interface LoginUser {
  loginUser: LoginUser_loginUser | null;
}

export interface LoginUserVariables {
  email: string;
  password: string;
  uniqueDeviceId?: string | null;
  method?: LoginMethod | null;
  tokenExpiration?: number | null;
  intercomHashMethod?: IntercomHashMethod | null;
}
