/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChallengePayload, PassiveChallengeType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpsertPassiveChallenge
// ====================================================

export interface UpsertPassiveChallenge_upsertPassiveChallenge_challenge_incomingData {
  steps: number | null;
  meditation: number | null;
}

export interface UpsertPassiveChallenge_upsertPassiveChallenge_challenge {
  updatedAt: number | null;
  yuCoinAwarded: number | null;
  incomingData: UpsertPassiveChallenge_upsertPassiveChallenge_challenge_incomingData | null;
}

export interface UpsertPassiveChallenge_upsertPassiveChallenge {
  challenge: UpsertPassiveChallenge_upsertPassiveChallenge_challenge | null;
  totalCoins: number | null;
}

export interface UpsertPassiveChallenge {
  upsertPassiveChallenge: UpsertPassiveChallenge_upsertPassiveChallenge | null;
}

export interface UpsertPassiveChallengeVariables {
  payload?: (ChallengePayload | null)[] | null;
  type: PassiveChallengeType;
}
