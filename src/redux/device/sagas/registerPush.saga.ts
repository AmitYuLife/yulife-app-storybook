import { Platform } from "react-native";
import Config from "react-native-config";
import Mixpanel from "react-native-mixpanel";
import PushNotification, { PushNotification as IPushNotification } from "react-native-push-notification";
import { call, put, spawn, take } from "redux-saga/effects";
import { addDeviceToken, pushNotificationReceived } from "../device.actions";
import { createPushNotificationsChannel } from "../device.channels";

export default function* registerPushSaga() {
    const channel = yield call(createPushNotificationsChannel);
    let result: IPushNotification & { os: string; token: string };

    if (Platform.OS === "android") {
        yield spawn(() => {
            try {
                Mixpanel.initPushHandling(Config.GCM_SENDER_ID);
            } catch (e) {
                // console.log(e);
            }
        });
    }

    while (true) {
        result = yield take(channel);

        if (result.token) {
            yield put(
                addDeviceToken({
                    deviceToken: result.token
                })
            );
        } else {
            // allow other modules to respond to a push
            yield put(pushNotificationReceived(result));
            yield call(handleNotification, result);
        }
    }
}

function* handleNotification(notification: IPushNotification) {
    const isChallengeCompleteNotification = /completed[\w\s]+challenge/.test((notification.message || "").toString());

    if (isChallengeCompleteNotification) {
        yield call(() => PushNotification.setApplicationIconBadgeNumber(Math.max(0, notification.badge - 1)));
        return;
    }
}
