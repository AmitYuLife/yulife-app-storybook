/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateLeaderboardConsent
// ====================================================

export interface UpdateLeaderboardConsent_updateLeaderboardConsent {
  leaderboardId: string | null;
  name: string | null;
  consent: boolean | null;
}

export interface UpdateLeaderboardConsent {
  updateLeaderboardConsent: UpdateLeaderboardConsent_updateLeaderboardConsent | null;
}

export interface UpdateLeaderboardConsentVariables {
  leaderboardId?: string | null;
  consent?: boolean | null;
}
