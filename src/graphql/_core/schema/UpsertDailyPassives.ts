/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChallengesPayload } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpsertDailyPassives
// ====================================================

export interface UpsertDailyPassives_upsertDailyPassives_challenges_incomingData {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
}

export interface UpsertDailyPassives_upsertDailyPassives_challenges {
  updatedAt: number | null;
  yuCoinAwarded: number | null;
  incomingData: UpsertDailyPassives_upsertDailyPassives_challenges_incomingData | null;
}

export interface UpsertDailyPassives_upsertDailyPassives {
  challenges: UpsertDailyPassives_upsertDailyPassives_challenges[];
  totalCoins: number;
  currentBalance: number;
}

export interface UpsertDailyPassives {
  upsertDailyPassives: UpsertDailyPassives_upsertDailyPassives;
}

export interface UpsertDailyPassivesVariables {
  payload: ChallengesPayload[];
}
