/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStatistics
// ====================================================

export interface GetStatistics_getStatistics_current_avatar {
  id: string;
  uri: string | null;
}

export interface GetStatistics_getStatistics_current_sections_general_stats_icon {
  id: string;
  uri: string | null;
}

export interface GetStatistics_getStatistics_current_sections_general_stats {
  id: string;
  type: string;
  icon: GetStatistics_getStatistics_current_sections_general_stats_icon;
  name: string;
  label: string;
  value: number;
  info: string | null;
}

export interface GetStatistics_getStatistics_current_sections_general {
  title: string | null;
  subtitle: string | null;
  stats: (GetStatistics_getStatistics_current_sections_general_stats | null)[];
}

export interface GetStatistics_getStatistics_current_sections_duels_stats_icon {
  id: string;
  uri: string | null;
}

export interface GetStatistics_getStatistics_current_sections_duels_stats {
  id: string;
  type: string;
  icon: GetStatistics_getStatistics_current_sections_duels_stats_icon;
  name: string;
  label: string;
  value: number;
  info: string | null;
}

export interface GetStatistics_getStatistics_current_sections_duels {
  title: string | null;
  subtitle: string | null;
  stats: (GetStatistics_getStatistics_current_sections_duels_stats | null)[];
}

export interface GetStatistics_getStatistics_current_sections_activity_stats_icon {
  id: string;
  uri: string | null;
}

export interface GetStatistics_getStatistics_current_sections_activity_stats {
  id: string;
  type: string;
  icon: GetStatistics_getStatistics_current_sections_activity_stats_icon;
  name: string;
  label: string;
  value: number;
  info: string | null;
}

export interface GetStatistics_getStatistics_current_sections_activity {
  title: string | null;
  subtitle: string | null;
  stats: (GetStatistics_getStatistics_current_sections_activity_stats | null)[];
}

export interface GetStatistics_getStatistics_current_sections {
  general: GetStatistics_getStatistics_current_sections_general | null;
  duels: GetStatistics_getStatistics_current_sections_duels | null;
  activity: GetStatistics_getStatistics_current_sections_activity;
}

export interface GetStatistics_getStatistics_current {
  avatar: GetStatistics_getStatistics_current_avatar;
  level: number;
  yuniversalMap: number;
  fullName: string;
  sections: GetStatistics_getStatistics_current_sections;
}

export interface GetStatistics_getStatistics_opponent_avatar {
  id: string;
  uri: string | null;
}

export interface GetStatistics_getStatistics_opponent_sections_activity_stats_icon {
  id: string;
  uri: string | null;
}

export interface GetStatistics_getStatistics_opponent_sections_activity_stats {
  id: string;
  type: string;
  icon: GetStatistics_getStatistics_opponent_sections_activity_stats_icon;
  name: string;
  label: string;
  value: number;
  info: string | null;
}

export interface GetStatistics_getStatistics_opponent_sections_activity {
  title: string | null;
  subtitle: string | null;
  stats: (GetStatistics_getStatistics_opponent_sections_activity_stats | null)[];
}

export interface GetStatistics_getStatistics_opponent_sections {
  activity: GetStatistics_getStatistics_opponent_sections_activity;
}

export interface GetStatistics_getStatistics_opponent {
  avatar: GetStatistics_getStatistics_opponent_avatar;
  level: number;
  yuniversalMap: number;
  fullName: string;
  sections: GetStatistics_getStatistics_opponent_sections;
}

export interface GetStatistics_getStatistics {
  current: GetStatistics_getStatistics_current;
  opponent: GetStatistics_getStatistics_opponent | null;
}

export interface GetStatistics {
  getStatistics: GetStatistics_getStatistics | null;
}

export interface GetStatisticsVariables {
  userId?: string | null;
}
