/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchForDuelOpponent
// ====================================================

export interface SearchForDuelOpponent_searchForDuelOpponent {
  fullName: string | null;
  customerId: string | null;
  avatar: string | null;
}

export interface SearchForDuelOpponent {
  /**
   * Search for the name of someone you can invite to a duel.
   */
  searchForDuelOpponent: (SearchForDuelOpponent_searchForDuelOpponent | null)[] | null;
}

export interface SearchForDuelOpponentVariables {
  query: string;
  limit?: number | null;
}
