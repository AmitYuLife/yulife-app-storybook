/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: JoinWeeklyGoal
// ====================================================

export interface JoinWeeklyGoal_joinWeeklyGoal_iconUrl {
  id: string;
  uri: string | null;
}

export interface JoinWeeklyGoal_joinWeeklyGoal {
  id: string;
  activitySubTotal: string;
  yuCoinSubTotal: string;
  currentPosition: number;
  maxLength: number;
  isClaimable: boolean;
  isClaimed: boolean;
  isJoined: boolean;
  iconUrl: JoinWeeklyGoal_joinWeeklyGoal_iconUrl;
}

export interface JoinWeeklyGoal {
  joinWeeklyGoal: JoinWeeklyGoal_joinWeeklyGoal | null;
}

export interface JoinWeeklyGoalVariables {
  goalId: string;
}
