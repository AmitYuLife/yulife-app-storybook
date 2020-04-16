/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IntercomHashMethod } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: RefreshSession
// ====================================================

export interface RefreshSession_refreshSession {
  token: string | null;
  expiresAt: number | null;
  message: string | null;
  intercomHash: string | null;
}

export interface RefreshSession {
  refreshSession: RefreshSession_refreshSession | null;
}

export interface RefreshSessionVariables {
  tokenExpiration: number;
  intercomHashMethod?: IntercomHashMethod | null;
}
