/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDuelTemplates
// ====================================================

export interface GetDuelTemplates_getDuelTemplates_challengeTemplate {
  id: string | null;
  type: string | null;
  description: string | null;
  duration: number | null;
}

export interface GetDuelTemplates_getDuelTemplates_wagerTemplate {
  id: string | null;
  yucoin: number | null;
}

export interface GetDuelTemplates_getDuelTemplates {
  challengeTemplate: (GetDuelTemplates_getDuelTemplates_challengeTemplate | null)[] | null;
  wagerTemplate: (GetDuelTemplates_getDuelTemplates_wagerTemplate | null)[] | null;
}

export interface GetDuelTemplates {
  /**
   * Get all the available duel templates.
   */
  getDuelTemplates: GetDuelTemplates_getDuelTemplates | null;
}
