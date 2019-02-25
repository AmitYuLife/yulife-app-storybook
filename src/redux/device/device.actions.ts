import { PushNotification } from "react-native-push-notification";
import { IDeviceStore } from "./device.reducer";
import { IPushNotification } from "./device.selectors";

export const ADD_DEVICE_TOKEN = "ADD_DEVICE_TOKEN";
export const PUSH_NOTIFICATION_RECEIVED = "PUSH_NOTIFICATION_RECEIVED";
export const REQUIRE_PUSH_ENABLED = "REQUIRE_PUSH_ENABLED";
export const CANCEL_LOCAL_PUSH = "CANCEL_LOCAL_PUSH";
export const SET_PUSH_PERMISSIONS = "SET_PUSH_PERMISSIONS";

export const addDeviceToken = (payload: Partial<IDeviceStore>) => ({
    payload,
    type: ADD_DEVICE_TOKEN
});

export const pushNotificationReceived = (payload: PushNotification) => ({
    payload,
    type: PUSH_NOTIFICATION_RECEIVED
});

export const requirePushEnabled = () => ({
    type: REQUIRE_PUSH_ENABLED
});

export const cancelLocalPush = () => ({
    type: CANCEL_LOCAL_PUSH
});

export const setPushPermissions = (payload: Partial<IPushNotification>) => ({
    payload,
    type: SET_PUSH_PERMISSIONS
});
