/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDuelsHubData
// ====================================================

export interface GetDuelsHubData_getDuelsHubData_activeDuels_opponents_name {
  firstName: string | null;
  lastName: string | null;
}

export interface GetDuelsHubData_getDuelsHubData_activeDuels_opponents {
  userId: string | null;
  score: number | null;
  status: string | null;
  startDateTime: string | null;
  avatar: string | null;
  name: GetDuelsHubData_getDuelsHubData_activeDuels_opponents_name | null;
}

export interface GetDuelsHubData_getDuelsHubData_activeDuels {
  id: string | null;
  status: string | null;
  yucoin: number | null;
  date: string | null;
  opponents: (GetDuelsHubData_getDuelsHubData_activeDuels_opponents | null)[] | null;
  isResponseRequired: boolean | null;
}

export interface GetDuelsHubData_getDuelsHubData_upcomingDuels_opponents_name {
  firstName: string | null;
  lastName: string | null;
}

export interface GetDuelsHubData_getDuelsHubData_upcomingDuels_opponents {
  userId: string | null;
  score: number | null;
  status: string | null;
  startDateTime: string | null;
  avatar: string | null;
  name: GetDuelsHubData_getDuelsHubData_upcomingDuels_opponents_name | null;
}

export interface GetDuelsHubData_getDuelsHubData_upcomingDuels {
  id: string | null;
  status: string | null;
  yucoin: number | null;
  date: string | null;
  opponents: (GetDuelsHubData_getDuelsHubData_upcomingDuels_opponents | null)[] | null;
  isResponseRequired: boolean | null;
}

export interface GetDuelsHubData_getDuelsHubData_duelInvitations_opponents_name {
  firstName: string | null;
  lastName: string | null;
}

export interface GetDuelsHubData_getDuelsHubData_duelInvitations_opponents {
  userId: string | null;
  score: number | null;
  status: string | null;
  startDateTime: string | null;
  avatar: string | null;
  name: GetDuelsHubData_getDuelsHubData_duelInvitations_opponents_name | null;
}

export interface GetDuelsHubData_getDuelsHubData_duelInvitations {
  id: string | null;
  status: string | null;
  yucoin: number | null;
  date: string | null;
  opponents: (GetDuelsHubData_getDuelsHubData_duelInvitations_opponents | null)[] | null;
  isResponseRequired: boolean | null;
}

export interface GetDuelsHubData_getDuelsHubData_pastDuels_opponents_name {
  firstName: string | null;
  lastName: string | null;
}

export interface GetDuelsHubData_getDuelsHubData_pastDuels_opponents {
  userId: string | null;
  score: number | null;
  status: string | null;
  startDateTime: string | null;
  avatar: string | null;
  name: GetDuelsHubData_getDuelsHubData_pastDuels_opponents_name | null;
}

export interface GetDuelsHubData_getDuelsHubData_pastDuels {
  id: string | null;
  status: string | null;
  yucoin: number | null;
  date: string | null;
  opponents: (GetDuelsHubData_getDuelsHubData_pastDuels_opponents | null)[] | null;
  isResponseRequired: boolean | null;
}

export interface GetDuelsHubData_getDuelsHubData {
  activeDuels: (GetDuelsHubData_getDuelsHubData_activeDuels | null)[] | null;
  upcomingDuels: (GetDuelsHubData_getDuelsHubData_upcomingDuels | null)[] | null;
  duelInvitations: (GetDuelsHubData_getDuelsHubData_duelInvitations | null)[] | null;
  pastDuels: (GetDuelsHubData_getDuelsHubData_pastDuels | null)[] | null;
}

export interface GetDuelsHubData {
  /**
   * Get the data needed for a specific user's DuelHub.
   */
  getDuelsHubData: GetDuelsHubData_getDuelsHubData | null;
}
