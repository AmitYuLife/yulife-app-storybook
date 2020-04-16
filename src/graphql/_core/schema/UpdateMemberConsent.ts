/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MobileConsentInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateMemberConsent
// ====================================================

export interface UpdateMemberConsent_upsertMobileConsent {
  mobileHealth: boolean | null;
  marketing: boolean | null;
  pushNotifications: boolean | null;
  companyLeaderboard: boolean | null;
  workspaceLeaderboard: boolean | null;
}

export interface UpdateMemberConsent {
  upsertMobileConsent: UpdateMemberConsent_upsertMobileConsent | null;
}

export interface UpdateMemberConsentVariables {
  consent?: MobileConsentInput | null;
}
