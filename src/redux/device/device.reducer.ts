import { Platform } from "react-native";
import { getUniqueDeviceId } from "@utils";
import { findBestAvailableLanguage } from "@locale";
import {
  AddDeviceTokenPayload,
  PushPermissionsStatus,
  SetDeviceLocalePayload,
  SetPushPermissionsPayload,
} from "./device.types";
import {
  setDeviceLocale as setDeviceLocaleAction,
  addDeviceToken as addDeviceTokenAction,
  requirePushEnabled as requirePushEnabledAction,
  markAppAsInstalled as markAppAsInstalledAction,
  setPushPermissions as setPushPermissionsAction,
  updateCurrentDate as updateCurrentDateAction,
  denyPushNotification as denyPushNotificationAction,
} from "./device.actions";
import moment from "moment";
import { DATE_FORMAT } from "@utils";
import { IDeviceStore } from "./device.types";
import { createReducer } from "@reduxjs/toolkit";

let deviceId = "";

(async () => {
  try {
    deviceId = await getUniqueDeviceId();
  } catch {
    //
  }
})();

export const getInitialState = (): IDeviceStore => {
  const locale = findBestAvailableLanguage();

  return {
    deviceId,
    deviceToken: "",
    os: Platform.OS,
    isAppFreshlyInstalled: true,
    currentDeviceLocale: locale,
    currentDate: moment().format(DATE_FORMAT),
    locale,
    pushNotifications: {
      requested: false,
      status: PushPermissionsStatus.notyet,
      /**
       * Used to prevent spamming users with MODALS.pushNotifications.
       */
      denyCount: 0,
    },
  };
};

const deviceReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(setDeviceLocaleAction, (state, action) => setDeviceLocale(state, action.payload));
  builder.addCase(addDeviceTokenAction, (state, action) => addDeviceToken(state, action.payload));
  builder.addCase(requirePushEnabledAction, (state) => requirePushEnabled(state));
  builder.addCase(markAppAsInstalledAction, (state) => markAppAsInstalled(state));
  builder.addCase(setPushPermissionsAction, (state, action) => setPushPermissions(state, action.payload));
  builder.addCase(updateCurrentDateAction, (state, action) => updateCurrentDate(state, action.payload));
  builder.addCase(denyPushNotificationAction, (state) => denyPushNotification(state));

  builder.addDefaultCase((state) => state);
});

const setDeviceLocale = (state: IDeviceStore, payload: SetDeviceLocalePayload) => ({
  ...state,
  locale: payload.locale,
  currentDeviceLocale: payload.currentDeviceLocale || state.currentDeviceLocale,
});

const markAppAsInstalled = (state: IDeviceStore) => ({ ...state, isAppFreshlyInstalled: false });

const addDeviceToken = (state: IDeviceStore, payload: AddDeviceTokenPayload) => ({
  ...state,
  ...payload,
  pushNotifications: {
    ...state.pushNotifications,
    deviceToken: payload.deviceToken,
  },
});

const requirePushEnabled = (state: IDeviceStore) => ({
  ...state,
  pushNotifications: {
    ...state.pushNotifications,
    requested: true,
  },
});

const setPushPermissions = (state: IDeviceStore, pushPermissions: SetPushPermissionsPayload) => ({
  ...state,
  pushNotifications: {
    ...state.pushNotifications,
    status: pushPermissions.status,
  },
});

const updateCurrentDate = (state: IDeviceStore, payload: string): IDeviceStore => ({
  ...state,
  currentDate: payload,
});

const denyPushNotification = (state: IDeviceStore) => ({
  ...state,
  pushNotifications: {
    ...state.pushNotifications,
    denyCount: (state.pushNotifications?.denyCount ?? 0) + 1,
  },
});

export default deviceReducer;
