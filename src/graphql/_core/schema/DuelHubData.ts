/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DuelHubData
// ====================================================

export interface DuelHubData_opponents_name {
  firstName: string | null;
  lastName: string | null;
}

export interface DuelHubData_opponents {
  userId: string | null;
  score: number | null;
  status: string | null;
  startDateTime: string | null;
  avatar: string | null;
  name: DuelHubData_opponents_name | null;
}

export interface DuelHubData {
  id: string | null;
  status: string | null;
  yucoin: number | null;
  date: string | null;
  opponents: (DuelHubData_opponents | null)[] | null;
  isResponseRequired: boolean | null;
}
