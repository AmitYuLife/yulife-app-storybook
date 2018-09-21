import { IReduxState } from "../_core/reducers";

export type PushPermissions = "notyet" | "later" | "enabled" | "denied";
export enum PushPermissionsEnum {
    denied = "denied",
    enabled = "enabled",
    later = "later",
    notyet = "notyet"
}

export interface IPushNotification {
    denied: boolean;
    requested: boolean;
    status: PushPermissions;
    skipped: string;
}

export const deviceTokenSelector = (state: IReduxState): string => state.device.deviceToken;
export const deviceIdSelector = (state: IReduxState): string => state.device.deviceId;
export const pushNotificationsSelector = (state: IReduxState): IPushNotification => state.device.pushNotifications;
