/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserCoinLedgerTodayActivity
// ====================================================

export interface GetUserCoinLedgerTodayActivity_coinLedger {
  currentBalance: number | null;
  currentLevel: number | null;
  yuniversalMap: number | null;
  yuniversalLevel: number | null;
  nextLevelAvailableAt: string | null;
}

export interface GetUserCoinLedgerTodayActivity_todayActivity {
  id: string | null;
  earned: number | null;
  milestones: number | null;
  name: string | null;
  score: string | null;
}

export interface GetUserCoinLedgerTodayActivity {
  coinLedger: GetUserCoinLedgerTodayActivity_coinLedger | null;
  todayActivity: (GetUserCoinLedgerTodayActivity_todayActivity | null)[] | null;
}
