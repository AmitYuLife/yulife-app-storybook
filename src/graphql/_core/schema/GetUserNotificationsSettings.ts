/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserNotificationsType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUserNotificationsSettings
// ====================================================

export interface GetUserNotificationsSettings_getUserNotificationsSettings {
  id: string;
  type: UserNotificationsType;
  name: string;
  time: string | null;
  isActive: boolean;
  isAvailable: boolean;
}

export interface GetUserNotificationsSettings {
  getUserNotificationsSettings: (GetUserNotificationsSettings_getUserNotificationsSettings | null)[] | null;
}
