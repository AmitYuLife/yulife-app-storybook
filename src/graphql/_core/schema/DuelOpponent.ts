/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DuelOpponent
// ====================================================

export interface DuelOpponent_name {
  firstName: string | null;
  lastName: string | null;
}

export interface DuelOpponent {
  userId: string | null;
  score: number | null;
  status: string | null;
  startDateTime: string | null;
  name: DuelOpponent_name | null;
  avatar: string | null;
  duelId: string | null;
  lastTimeOpponentDataRetrieved: string | null;
}
