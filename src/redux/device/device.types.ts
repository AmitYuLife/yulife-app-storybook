import { Language } from "@locale";

export interface IDeviceStore {
  deviceId: string;
  deviceToken: string;
  os: string;
  currentDate: string;
  /** @description - the selected user locale on their phone's settings */
  currentDeviceLocale: Language;
  /** @description - the selected user locale in the YuLife app */
  locale: Language;
  pushNotifications: IPushNotification;
  isAppFreshlyInstalled: boolean;
}

export interface IPushNotification {
  requested: boolean;
  status: PushPermissionsStatus;
  denyCount: number;
}

export enum PushPermissionsStatus {
  denied = "denied",
  enabled = "enabled",
  notyet = "notyet",
}

export type SetDeviceLocalePayload = { currentDeviceLocale?: Language; locale: Language; shouldMutateTheApi?: boolean };
export type SetPushPermissionsPayload = Pick<IPushNotification, "status">;
export type PushNotificationReceivedPayload = { os: string; token: string };
export type AddDeviceTokenPayload = Pick<IDeviceStore, "deviceToken">;
