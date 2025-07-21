import {
  AddDeviceTokenPayload,
  PushNotificationReceivedPayload,
  SetDeviceLocalePayload,
  SetPushPermissionsPayload,
} from "./device.types";
import { createAction } from "@reduxjs/toolkit";

export const SET_DEVICE_LOCALE = "SET_DEVICE_LOCALE";
export const ADD_DEVICE_TOKEN = "ADD_DEVICE_TOKEN";
export const PUSH_NOTIFICATION_RECEIVED = "PUSH_NOTIFICATION_RECEIVED";
export const REQUIRE_PUSH_ENABLED = "REQUIRE_PUSH_ENABLED";
export const CANCEL_LOCAL_PUSH = "CANCEL_LOCAL_PUSH";
export const SET_PUSH_PERMISSIONS = "SET_PUSH_PERMISSIONS";
export const MARK_APP_AS_INSTALLED = "MARK_APP_AS_INSTALLED";
export const UPDATE_CURRENT_DATE = "UPDATE_CURRENT_DATE";
export const DENY_PUSH_NOTIFICATION = "DENY_PUSH_NOTIFICATION";

export const addDeviceToken = createAction<AddDeviceTokenPayload, typeof ADD_DEVICE_TOKEN>(ADD_DEVICE_TOKEN);

export const markAppAsInstalled = createAction(MARK_APP_AS_INSTALLED);

export const pushNotificationReceived = createAction<
  PushNotificationReceivedPayload,
  typeof PUSH_NOTIFICATION_RECEIVED
>(PUSH_NOTIFICATION_RECEIVED);

export const requirePushEnabled = createAction(REQUIRE_PUSH_ENABLED);

export const cancelLocalPush = createAction(CANCEL_LOCAL_PUSH);

export const setPushPermissions = createAction<SetPushPermissionsPayload, typeof SET_PUSH_PERMISSIONS>(
  SET_PUSH_PERMISSIONS
);

export const setDeviceLocale = createAction<SetDeviceLocalePayload, typeof SET_DEVICE_LOCALE>(SET_DEVICE_LOCALE);

export const updateCurrentDate = createAction<string, typeof UPDATE_CURRENT_DATE>(UPDATE_CURRENT_DATE);

export const denyPushNotification = createAction(DENY_PUSH_NOTIFICATION);
