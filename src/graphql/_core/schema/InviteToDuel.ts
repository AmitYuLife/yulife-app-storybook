/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: InviteToDuel
// ====================================================

export interface InviteToDuel_inviteToDuel {
  id: string | null;
}

export interface InviteToDuel {
  /**
   * Send a duel invitation to the given opponent(s).
   */
  inviteToDuel: InviteToDuel_inviteToDuel | null;
}

export interface InviteToDuelVariables {
  opponentUserIds?: string[] | null;
  startDateTime: string;
  duration: number;
  yucoin: number;
  requestLocation?: string | null;
  leaderboardPlacement?: number | null;
}
