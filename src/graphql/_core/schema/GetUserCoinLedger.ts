/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserCoinLedger
// ====================================================

export interface GetUserCoinLedger_coinLedger {
  currentBalance: number | null;
  currentLevel: number | null;
  yuniversalMap: number | null;
  yuniversalLevel: number | null;
  nextLevelAvailableAt: string | null;
}

export interface GetUserCoinLedger {
  coinLedger: GetUserCoinLedger_coinLedger | null;
}
