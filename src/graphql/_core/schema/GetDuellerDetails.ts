/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDuellerDetails
// ====================================================

export interface GetDuellerDetails_getDuellerDetails_user {
  firstName: string | null;
  fullName: string | null;
  avatar: string | null;
  coins: number | null;
}

export interface GetDuellerDetails_getDuellerDetails_opponent {
  firstName: string | null;
  fullName: string | null;
  avatar: string | null;
  coins: number | null;
}

export interface GetDuellerDetails_getDuellerDetails_nextStepAlert {
  title: string;
  subtitle: string;
}

export interface GetDuellerDetails_getDuellerDetails {
  user: GetDuellerDetails_getDuellerDetails_user | null;
  opponent: GetDuellerDetails_getDuellerDetails_opponent | null;
  nextStepAlert: GetDuellerDetails_getDuellerDetails_nextStepAlert | null;
}

export interface GetDuellerDetails {
  /**
   * Get the details of the users associated with a duel.
   */
  getDuellerDetails: GetDuellerDetails_getDuellerDetails | null;
}

export interface GetDuellerDetailsVariables {
  opponentId: string;
}
