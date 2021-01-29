/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDuelInvitations
// ====================================================

export interface GetDuelInvitations_getDuelInvitations_opponents_name {
  firstName: string | null;
  lastName: string | null;
}

export interface GetDuelInvitations_getDuelInvitations_opponents {
  userId: string | null;
  score: number | null;
  status: string | null;
  startDateTime: string | null;
  name: GetDuelInvitations_getDuelInvitations_opponents_name | null;
  duelId: string | null;
}

export interface GetDuelInvitations_getDuelInvitations {
  id: string | null;
  opponents: (GetDuelInvitations_getDuelInvitations_opponents | null)[] | null;
  duration: number | null;
  type: string | null;
  yucoin: number | null;
  status: string | null;
  inviteStatus: string | null;
}

export interface GetDuelInvitations {
  /**
   * Get duel invitations
   */
  getDuelInvitations: (GetDuelInvitations_getDuelInvitations | null)[] | null;
}
