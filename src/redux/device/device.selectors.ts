import { IReduxState } from "../_core/reducers";

export type PushPermissions = "notyet" | "later" | "enabled" | "denied";
export enum PushPermissionsEnum {
    denied = "denied",
    enabled = "enabled",
    later = "later",
    notyet = "notyet"
}

export interface IPushNotification {
    requested: boolean;
    status: PushPermissions;
}

export const getDeviceToken = (state: IReduxState): string => state.device.deviceToken;
export const getDeviceId = (state: IReduxState): string => state.device.deviceId;
export const getPushNotifications = (state: IReduxState): IPushNotification => state.device.pushNotifications;
