/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDuels
// ====================================================

export interface GetDuels_getDuels_opponents_name {
  firstName: string | null;
  lastName: string | null;
}

export interface GetDuels_getDuels_opponents {
  userId: string | null;
  score: number | null;
  status: string | null;
  startDateTime: string | null;
  name: GetDuels_getDuels_opponents_name | null;
}

export interface GetDuels_getDuels {
  id: string | null;
  opponents: (GetDuels_getDuels_opponents | null)[] | null;
  duration: number | null;
  type: string | null;
  yucoin: number | null;
  status: string | null;
}

export interface GetDuels {
  /**
   * Get all of a specific user's duels.
   */
  getDuels: (GetDuels_getDuels | null)[] | null;
}
