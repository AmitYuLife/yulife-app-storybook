/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChallengesPayload } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpsertPassiveChallenges
// ====================================================

export interface UpsertPassiveChallenges_upsertPassiveChallenges_challenges_incomingData {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
}

export interface UpsertPassiveChallenges_upsertPassiveChallenges_challenges {
  updatedAt: number | null;
  yuCoinAwarded: number | null;
  incomingData: UpsertPassiveChallenges_upsertPassiveChallenges_challenges_incomingData | null;
}

export interface UpsertPassiveChallenges_upsertPassiveChallenges {
  challenges: UpsertPassiveChallenges_upsertPassiveChallenges_challenges[];
  totalCoins: number;
}

export interface UpsertPassiveChallenges {
  upsertPassiveChallenges: UpsertPassiveChallenges_upsertPassiveChallenges;
}

export interface UpsertPassiveChallengesVariables {
  payload: ChallengesPayload[];
}
