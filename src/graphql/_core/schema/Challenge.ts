/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Challenge
// ====================================================

export interface Challenge_milestoneLog {
  id: string | null;
  completed: number | null;
  completionData: (number | null)[] | null;
  description: string | null;
}

export interface Challenge {
  id: string | null;
  actions: (string | null)[] | null;
  challengeTemplateId: string | null;
  currentData: number | null;
  currentTarget: number | null;
  customerId: string | null;
  data: (number | null)[] | null;
  endTime: number | null;
  milestoneLog: (Challenge_milestoneLog | null)[] | null;
  startTime: number | null;
  status: string | null;
  target: (number | null)[] | null;
  updatedAt: number | null;
  XPAwarded: number | null;
  yuCoinAwarded: number | null;
  __typename: "Challenge";
}
