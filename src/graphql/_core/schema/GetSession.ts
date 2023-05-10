/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSession
// ====================================================

export interface GetSession_getSession {
  id: string | null;
  expires: number | null;
  tokenRefreshRequired: boolean | null;
}

export interface GetSession_mobileUpgradeRequired {
  title: string;
  message: string;
  imageUrl: string | null;
  isDismissable: boolean;
}

export interface GetSession {
  getSession: GetSession_getSession | null;
  mobileUpgradeRequired: GetSession_mobileUpgradeRequired | null;
}
