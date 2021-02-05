/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RespondToDuel
// ====================================================

export interface RespondToDuel_respondToDuel {
  id: string | null;
}

export interface RespondToDuel {
  /**
   * Accept or decline a duel invitation.
   */
  respondToDuel: RespondToDuel_respondToDuel | null;
}

export interface RespondToDuelVariables {
  duelId: string;
  startDateTime: string;
  hasAccepted: boolean;
  requestLocation?: string | null;
  leaderboardPlacement?: number | null;
}
