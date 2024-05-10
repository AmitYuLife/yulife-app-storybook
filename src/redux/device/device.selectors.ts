import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["device"];
const reducer = (state: IReduxState) => state.device;

const deviceTokenSelector = (state: State) => state.deviceToken;
export const getDeviceToken = createSelector(reducer, deviceTokenSelector);

const deviceLocaleSelector = (state: State) => state.locale;
export const getDeviceLocale = createSelector(reducer, deviceLocaleSelector);

const deviceIdSelector = (state: State) => state.deviceId;
export const getDeviceId = createSelector(reducer, deviceIdSelector);

const pushNotificationsSelector = (state: State) => state.pushNotifications;
export const getPushNotifications = createSelector(reducer, pushNotificationsSelector);

const isFreshlyInstalledSelector = (state: State) => state.isAppFreshlyInstalled;
export const getIsAppFreshlyInstalled = createSelector(reducer, isFreshlyInstalledSelector);

const currentDateSelector = (state: State): string => state.currentDate;
export const getCurrentDateState = createSelector(reducer, currentDateSelector);
