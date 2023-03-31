/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserPassiveChallengesEarnRate
// ====================================================

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_STEPS_exchange {
  yucoin: number | null;
  steps: number | null;
  meditation: number | null;
  surge: number | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_STEPS_levelSlot_milestones {
  id: string | null;
  coins: number | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_STEPS_levelSlot {
  id: string | null;
  milestones:
    | (GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_STEPS_levelSlot_milestones | null)[]
    | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_STEPS {
  exchange: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_STEPS_exchange | null;
  levelSlot: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_STEPS_levelSlot | null;
  isMainSurge: boolean | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_CYCLING_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_CYCLING_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_CYCLING_levelSlot_milestones_target | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_CYCLING_levelSlot {
  id: string | null;
  subtype: string | null;
  unit: string | null;
  milestones:
    | (GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_CYCLING_levelSlot_milestones | null)[]
    | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_CYCLING {
  levelSlot: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_CYCLING_levelSlot | null;
  isMainSurge: boolean | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_MEDITATION_exchange {
  yucoin: number | null;
  steps: number | null;
  meditation: number | null;
  surge: number | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_MEDITATION_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_MEDITATION_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_MEDITATION_levelSlot_milestones_target | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_MEDITATION_levelSlot {
  id: string | null;
  subtype: string | null;
  unit: string | null;
  milestones:
    | (GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_MEDITATION_levelSlot_milestones | null)[]
    | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_MEDITATION {
  exchange: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_MEDITATION_exchange | null;
  levelSlot: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_MEDITATION_levelSlot | null;
  isMainSurge: boolean | null;
}

export interface GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate {
  STEPS: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_STEPS | null;
  CYCLING: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_CYCLING | null;
  MEDITATION: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate_MEDITATION | null;
}

export interface GetUserPassiveChallengesEarnRate {
  getUserPassiveChallengesEarnRate: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate | null;
}
