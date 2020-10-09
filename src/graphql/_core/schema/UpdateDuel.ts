/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateDuel
// ====================================================

export interface UpdateDuel {
  /**
   * Update a duel (e.g. to mark it as finished and distribute YuCoin to the winner).
   */
  updateDuel: boolean | null;
}

export interface UpdateDuelVariables {
  duelId: string;
  score: number;
}
