/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CommunityGoalType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetCommunityGoals
// ====================================================

export interface GetCommunityGoals_getCommunityGoals_participants_stats {
  /**
   * Value here matches the goalType. If goalType is steps, we're talking steps
   * here. If it's meditation, we're talking seconds. Ha.
   */
  value: number | null;
  lastUpdatedAt: string | null;
}

export interface GetCommunityGoals_getCommunityGoals_participants {
  userId: string | null;
  avatarUrl: string | null;
  nickname: string | null;
  stats: GetCommunityGoals_getCommunityGoals_participants_stats | null;
}

export interface GetCommunityGoals_getCommunityGoals {
  id: string | null;
  title: string | null;
  description: string | null;
  /**
   * From what date we'll count the goalType. It's inclusive.
   */
  startDate: string | null;
  /**
   * The last date the steps will be counted for. It's inclusive.
   */
  endDate: string | null;
  /**
   * Award date is the date that the API will check if the goal was met. And award the participants.
   */
  awardDate: string | null;
  maxJoiners: number | null;
  /**
   * It has to be the core activity type. Steps or meditation for now.
   */
  goalType: CommunityGoalType | null;
  goalValue: number | null;
  /**
   * How much a participant will earn. If the rewardMechanism is fixed, all
   * participants will get this value. If the rewardMechanism is proportional,
   * everyone will get their percentage off this.
   */
  rewardValue: number | null;
  /**
   * YuCoin. It's always YuCoin.
   */
  rewardType: string | null;
  /**
   * If the rewardMechanism is fixed, all participants will get this value. If the
   * rewardMechanism is proportional, everyone will get their percentage off this.
   */
  rewardMechanism: string | null;
  isExpired: boolean | null;
  youHaveJoined: boolean | null;
  participants: (GetCommunityGoals_getCommunityGoals_participants | null)[] | null;
}

export interface GetCommunityGoals {
  /**
   * Returns the last 7 community goals, sorted by endDate.
   */
  getCommunityGoals: (GetCommunityGoals_getCommunityGoals | null)[] | null;
}
