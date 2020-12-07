/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: User
// ====================================================

export interface User_business {
  businessAccountName: string | null;
  alpha: boolean | null;
  isGroup: boolean | null;
  isWellbeingAccess: boolean | null;
}

export interface User_connections {
  name: string | null;
  isConnected: boolean | null;
  lastUpdated: number | null;
}

export interface User_userFeatures {
  name: string | null;
  value: boolean | null;
}

export interface User_mobileConsent {
  mobileHealth: boolean | null;
  marketing: boolean | null;
  pushNotifications: boolean | null;
  companyLeaderboard: boolean | null;
  workspaceLeaderboard: boolean | null;
}

export interface User_coinLedger {
  currentBalance: number | null;
  currentLevel: number | null;
  nextLevelAvailableAt: string | null;
}

export interface User_passiveSteps_exchange {
  yucoin: number | null;
  steps: number | null;
  meditation: number | null;
  surge: number | null;
}

export interface User_passiveSteps {
  exchange: User_passiveSteps_exchange | null;
  isMainSurge: boolean | null;
}

export interface User_passiveMeditation_exchange {
  yucoin: number | null;
  steps: number | null;
  meditation: number | null;
  surge: number | null;
}

export interface User_passiveMeditation_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
}

export interface User_passiveMeditation_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: User_passiveMeditation_levelSlot_milestones_target | null;
}

export interface User_passiveMeditation_levelSlot {
  subtype: string | null;
  unit: string | null;
  milestones: (User_passiveMeditation_levelSlot_milestones | null)[] | null;
}

export interface User_passiveMeditation {
  exchange: User_passiveMeditation_exchange | null;
  levelSlot: User_passiveMeditation_levelSlot | null;
  isMainSurge: boolean | null;
}

export interface User_activeChallenge_challenge_incomingData {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
}

export interface User_activeChallenge_challenge {
  level: number | null;
  levelSlotId: string | null;
  status: string | null;
  endDateTime: string | null;
  startDateTime: string | null;
  rating: number | null;
  subtype: string | null;
  incomingData: User_activeChallenge_challenge_incomingData | null;
}

export interface User_activeChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
}

export interface User_activeChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: User_activeChallenge_levelSlot_milestones_target | null;
}

export interface User_activeChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  milestones: (User_activeChallenge_levelSlot_milestones | null)[] | null;
}

export interface User_activeChallenge {
  challenge: User_activeChallenge_challenge | null;
  levelSlot: User_activeChallenge_levelSlot | null;
}

export interface User_activeStreak {
  id: string | null;
  type: string | null;
  value: number | null;
  maxStreak: number | null;
  streakAwardId: string | null;
  streak: number | null;
  nextStreakAvailableAt: string | null;
}

export interface User_todayActivity {
  id: string | null;
  earned: number | null;
  milestones: number | null;
  name: string | null;
  score: string | null;
}

export interface User_leaderboards {
  leaderboardId: string | null;
  name: string | null;
  consent: boolean | null;
  hasAccepted: boolean | null;
  inviteFrom: string | null;
}

export interface User {
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
  business: User_business | null;
  wootricId: string | null;
  membershipType: string | null;
  challengesDoneToday: number | null;
  connections: (User_connections | null)[] | null;
  userFeatures: (User_userFeatures | null)[] | null;
  mobileConsent: User_mobileConsent | null;
  coinLedger: User_coinLedger | null;
  passiveSteps: User_passiveSteps | null;
  passiveMeditation: User_passiveMeditation | null;
  activeChallenge: User_activeChallenge | null;
  activeStreak: User_activeStreak | null;
  todayActivity: (User_todayActivity | null)[] | null;
  leaderboards: (User_leaderboards | null)[] | null;
  phone: string | null;
  addressFirstLine: string | null;
  addressSecondLine: string | null;
  addressCity: string | null;
  addressPostCode: string | null;
}
