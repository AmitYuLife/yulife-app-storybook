/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserPassiveChallengesEarnRate
// ====================================================

export interface UserPassiveChallengesEarnRate_STEPS_exchange {
  yucoin: number | null;
  steps: number | null;
  meditation: number | null;
  surge: number | null;
}

export interface UserPassiveChallengesEarnRate_STEPS_levelSlot_milestones {
  id: string | null;
  coins: number | null;
}

export interface UserPassiveChallengesEarnRate_STEPS_levelSlot {
  id: string | null;
  milestones: (UserPassiveChallengesEarnRate_STEPS_levelSlot_milestones | null)[] | null;
}

export interface UserPassiveChallengesEarnRate_STEPS {
  exchange: UserPassiveChallengesEarnRate_STEPS_exchange | null;
  levelSlot: UserPassiveChallengesEarnRate_STEPS_levelSlot | null;
  isMainSurge: boolean | null;
}

export interface UserPassiveChallengesEarnRate_CYCLING_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
}

export interface UserPassiveChallengesEarnRate_CYCLING_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: UserPassiveChallengesEarnRate_CYCLING_levelSlot_milestones_target | null;
}

export interface UserPassiveChallengesEarnRate_CYCLING_levelSlot {
  id: string | null;
  subtype: string | null;
  unit: string | null;
  milestones: (UserPassiveChallengesEarnRate_CYCLING_levelSlot_milestones | null)[] | null;
}

export interface UserPassiveChallengesEarnRate_CYCLING {
  levelSlot: UserPassiveChallengesEarnRate_CYCLING_levelSlot | null;
  isMainSurge: boolean | null;
}

export interface UserPassiveChallengesEarnRate_MEDITATION_exchange {
  yucoin: number | null;
  steps: number | null;
  meditation: number | null;
  surge: number | null;
}

export interface UserPassiveChallengesEarnRate_MEDITATION_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
}

export interface UserPassiveChallengesEarnRate_MEDITATION_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: UserPassiveChallengesEarnRate_MEDITATION_levelSlot_milestones_target | null;
}

export interface UserPassiveChallengesEarnRate_MEDITATION_levelSlot {
  id: string | null;
  subtype: string | null;
  unit: string | null;
  milestones: (UserPassiveChallengesEarnRate_MEDITATION_levelSlot_milestones | null)[] | null;
}

export interface UserPassiveChallengesEarnRate_MEDITATION {
  exchange: UserPassiveChallengesEarnRate_MEDITATION_exchange | null;
  levelSlot: UserPassiveChallengesEarnRate_MEDITATION_levelSlot | null;
  isMainSurge: boolean | null;
}

export interface UserPassiveChallengesEarnRate {
  STEPS: UserPassiveChallengesEarnRate_STEPS | null;
  CYCLING: UserPassiveChallengesEarnRate_CYCLING | null;
  MEDITATION: UserPassiveChallengesEarnRate_MEDITATION | null;
}
