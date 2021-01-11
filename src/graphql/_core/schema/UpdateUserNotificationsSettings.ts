/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserNotificationsType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateUserNotificationsSettings
// ====================================================

export interface UpdateUserNotificationsSettings {
  updateUserNotificationsSettings: boolean | null;
}

export interface UpdateUserNotificationsSettingsVariables {
  type: UserNotificationsType;
  isActive: boolean;
  time?: string | null;
}
