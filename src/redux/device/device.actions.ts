import { PushNotification } from "react-native-push-notification";
import { SyncAction } from "../_core/types";
import { IDeviceStore } from "./device.reducer";
import { IPushNotification } from "./device.selectors";

export const ADD_DEVICE_TOKEN = "ADD_DEVICE_TOKEN";
export const PUSH_NOTIFICATION_RECEIVED = "PUSH_NOTIFICATION_RECEIVED";
export const REQUIRE_PUSH_ENABLED = "REQUIRE_PUSH_ENABLED";
export const CANCEL_LOCAL_PUSH = "CANCEL_LOCAL_PUSH";
export const SEND_TEST_LOCAL_PUSH = "SEND_TEST_LOCAL_PUSH";
export const SET_PUSH_PERMISSIONS = "SET_PUSH_PERMISSIONS";

export type AddDeviceTokenActionResult = SyncAction<Partial<IDeviceStore>>;
export type AddDeviceTokenAction = (payload: Partial<IDeviceStore>) => AddDeviceTokenActionResult;
export const addDeviceToken: AddDeviceTokenAction = (payload) => ({
    payload,
    type: ADD_DEVICE_TOKEN
});

export type PushNotificationReceivedActionResult = SyncAction<PushNotification>;
export type PushNotificationReceivedAction = (payload: PushNotification) => PushNotificationReceivedActionResult;
export const pushNotificationReceived: PushNotificationReceivedAction = (payload) => ({
    payload,
    type: PUSH_NOTIFICATION_RECEIVED
});

export type RequirePushEnabledAction = () => SyncAction;
export const requirePushEnabled: RequirePushEnabledAction = () => ({
    type: REQUIRE_PUSH_ENABLED
});

export type SendTestPushAction = () => SyncAction;
export const sendTestPush: SendTestPushAction = () => ({
    type: SEND_TEST_LOCAL_PUSH
});

export type CancelLocalPushAction = () => SyncAction;
export const cancelLocalPush: CancelLocalPushAction = () => ({
    type: CANCEL_LOCAL_PUSH
});

export type SetPushPermissionsActionResult = SyncAction<Partial<IPushNotification>>;
export type SetPushPermissionsAction = (payload: Partial<IPushNotification>) => SetPushPermissionsActionResult;
export const setPushPermissions: SetPushPermissionsAction = (payload) => ({
    payload,
    type: SET_PUSH_PERMISSIONS
});
