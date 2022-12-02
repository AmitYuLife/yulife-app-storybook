/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserActiveStreak
// ====================================================

export interface GetUserActiveStreak_getUserActiveStreak {
  id: string | null;
  type: string | null;
  value: number | null;
  maxStreak: number | null;
  streakAwardId: string | null;
  streak: number | null;
  nextStreakAvailableAt: string | null;
}

export interface GetUserActiveStreak {
  getUserActiveStreak: GetUserActiveStreak_getUserActiveStreak | null;
}
