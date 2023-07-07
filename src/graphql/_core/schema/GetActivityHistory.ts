/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetActivityHistory
// ====================================================

export interface GetActivityHistory_getActivityHistoryWithLevels_sources {
  garmin: number | null;
  fitbit: number | null;
  strava: number | null;
  withings: number | null;
  device: number | null;
}

export interface GetActivityHistory_getActivityHistoryWithLevels_challenges {
  id: string | null;
  earned: number | null;
  milestones: number | null;
  name: string | null;
  score: string | null;
}

export interface GetActivityHistory_getActivityHistoryWithLevels_cyclingSources {
  garmin: number | null;
  fitbit: number | null;
  strava: number | null;
  withings: number | null;
  device: number | null;
}

export interface GetActivityHistory_getActivityHistoryWithLevels {
  id: string | null;
  steps: number | null;
  sources: GetActivityHistory_getActivityHistoryWithLevels_sources | null;
  yucoin: number | null;
  dayOfMonth: string | null;
  dayOfWeek: string | null;
  monthAndYear: string | null;
  level: number | null;
  challenges: (GetActivityHistory_getActivityHistoryWithLevels_challenges | null)[] | null;
  mindfulSeconds: number | null;
  mindfulYucoin: number | null;
  pensionYucoin: number | null;
  cycling: number | null;
  cyclingSources: GetActivityHistory_getActivityHistoryWithLevels_cyclingSources | null;
  cyclingYucoin: number | null;
}

export interface GetActivityHistory {
  getActivityHistoryWithLevels: (GetActivityHistory_getActivityHistoryWithLevels | null)[] | null;
}

export interface GetActivityHistoryVariables {
  monthsAgo?: number | null;
  isFullActivity?: boolean | null;
}
