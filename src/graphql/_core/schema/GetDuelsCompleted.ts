/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDuelsCompleted
// ====================================================

export interface GetDuelsCompleted_getDuelsCompleted_duels_opponents_name {
  firstName: string | null;
  lastName: string | null;
}

export interface GetDuelsCompleted_getDuelsCompleted_duels_opponents {
  userId: string | null;
  score: number | null;
  status: string | null;
  startDateTime: string | null;
  name: GetDuelsCompleted_getDuelsCompleted_duels_opponents_name | null;
  avatar: string | null;
  duelId: string | null;
  lastTimeOpponentDataRetrieved: string | null;
}

export interface GetDuelsCompleted_getDuelsCompleted_duels {
  id: string | null;
  opponents: (GetDuelsCompleted_getDuelsCompleted_duels_opponents | null)[] | null;
  duration: number | null;
  type: string | null;
  yucoin: number | null;
  status: string | null;
}

export interface GetDuelsCompleted_getDuelsCompleted {
  id: string | null;
  duels: (GetDuelsCompleted_getDuelsCompleted_duels | null)[] | null;
}

export interface GetDuelsCompleted {
  /**
   * Get completed duels
   */
  getDuelsCompleted: (GetDuelsCompleted_getDuelsCompleted | null)[] | null;
}
