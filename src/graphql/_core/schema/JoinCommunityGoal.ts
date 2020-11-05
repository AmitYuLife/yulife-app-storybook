/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: JoinCommunityGoal
// ====================================================

export interface JoinCommunityGoal {
  /**
   * Allows the current user to join a community goal, given there's enough space, it's not expired and you're not yet in it.
   */
  joinCommunityGoal: boolean | null;
}

export interface JoinCommunityGoalVariables {
  communityGoalId: string;
}
