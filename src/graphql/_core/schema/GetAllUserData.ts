/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

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
  consent: boolean | null;
  hasAccepted: boolean | null;
  inviteFrom: string | null;
}

export interface GetAllUserData {
  coinLedger: GetAllUserData_coinLedger | null;
  todayActivity: (GetAllUserData_todayActivity | null)[] | null;
  leaderboards: (GetAllUserData_leaderboards | null)[] | null;
}
