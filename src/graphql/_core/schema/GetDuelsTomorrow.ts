/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDuelsTomorrow
// ====================================================

export interface GetDuelsTomorrow_getDuelsTomorrow_opponents_name {
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
}

export interface GetDuelsTomorrow_getDuelsTomorrow_opponents {
  userId: string | null;
  score: number | null;
  status: string | null;
  startDateTime: string | null;
  name: GetDuelsTomorrow_getDuelsTomorrow_opponents_name | null;
  avatar: string | null;
  duelId: string | null;
  lastTimeOpponentDataRetrieved: string | null;
}

export interface GetDuelsTomorrow_getDuelsTomorrow {
  id: string | null;
  opponents: (GetDuelsTomorrow_getDuelsTomorrow_opponents | null)[] | null;
  duration: number | null;
  type: string | null;
  yucoin: number | null;
  status: string | null;
}

export interface GetDuelsTomorrow {
  /**
   * Get duels happening tomorrow
   */
  getDuelsTomorrow: (GetDuelsTomorrow_getDuelsTomorrow | null)[] | null;
}
