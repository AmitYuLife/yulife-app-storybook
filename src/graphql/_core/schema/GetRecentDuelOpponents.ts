/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRecentDuelOpponents
// ====================================================

export interface GetRecentDuelOpponents_getRecentDuelOpponents {
  fullName: string | null;
  customerId: string | null;
  avatar: string | null;
}

export interface GetRecentDuelOpponents {
  /**
   * Get the names and avatars of the people you've most recently duelled.
   */
  getRecentDuelOpponents: (GetRecentDuelOpponents_getRecentDuelOpponents | null)[] | null;
}

export interface GetRecentDuelOpponentsVariables {
  limit?: number | null;
}
