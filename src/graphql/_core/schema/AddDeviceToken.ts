/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OS } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddDeviceToken
// ====================================================

export interface AddDeviceToken_addDeviceToken {
  userId: string | null;
  deviceToken: string | null;
  deviceId: string | null;
  subscribed: boolean | null;
  os: OS | null;
}

export interface AddDeviceToken {
  addDeviceToken: AddDeviceToken_addDeviceToken | null;
}

export interface AddDeviceTokenVariables {
  deviceToken: string;
  os: OS;
  deviceId: string;
  subscribed: boolean;
}
