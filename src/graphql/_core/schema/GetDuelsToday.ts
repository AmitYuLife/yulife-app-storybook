/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDuelsToday
// ====================================================

export interface GetDuelsToday_getDuelsToday_opponents_name {
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
}

export interface GetDuelsToday_getDuelsToday_opponents {
  userId: string | null;
  score: number | null;
  status: string | null;
  startDateTime: string | null;
  name: GetDuelsToday_getDuelsToday_opponents_name | null;
  avatar: string | null;
  duelId: string | null;
  lastTimeOpponentDataRetrieved: string | null;
}

export interface GetDuelsToday_getDuelsToday {
  id: string | null;
  opponents: (GetDuelsToday_getDuelsToday_opponents | null)[] | null;
  duration: number | null;
  type: string | null;
  yucoin: number | null;
  status: string | null;
  updatedAt: string | null;
}

export interface GetDuelsToday {
  /**
   * Get duels happening today
   */
  getDuelsToday: (GetDuelsToday_getDuelsToday | null)[] | null;
}
