import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";

export type PushPermissions = "notyet" | "later" | "enabled" | "denied";
export enum PushPermissionsEnum {
  denied = "denied",
  enabled = "enabled",
  later = "later",
  notyet = "notyet",
}

export interface IPushNotification {
  requested: boolean;
  status: PushPermissions;
}

type State = IReduxState["device"];
const reducer = (state: IReduxState) => state.device;

const deviceTokenSelector = (state: State) => state.deviceToken;
export const getDeviceToken = createSelector(reducer, deviceTokenSelector);

const deviceIdSelector = (state: State) => state.deviceId;
export const getDeviceId = createSelector(reducer, deviceIdSelector);

const pushNotificationsSelector = (state: State) => state.pushNotifications;
export const getPushNotifications = createSelector(reducer, pushNotificationsSelector);
