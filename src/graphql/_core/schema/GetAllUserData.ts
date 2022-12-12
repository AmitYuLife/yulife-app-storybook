/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllUserData
// ====================================================

export interface GetAllUserData_getUserCoinLedger {
  currentBalance: number | null;
  currentLevel: number | null;
  yuniversalMap: number | null;
  yuniversalLevel: number | null;
  nextLevelAvailableAt: string | null;
}

export interface GetAllUserData {
  getUserCoinLedger: GetAllUserData_getUserCoinLedger | null;
}
