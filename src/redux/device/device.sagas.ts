import { Platform } from "react-native";
import Config from "react-native-config";
import Intercom from "react-native-intercom";
import Mixpanel from "react-native-mixpanel";
import { Navigation } from "react-native-navigation";
import PushNotification, {
    PushNotification as IPushNotification,
    PushNotificationPermissions
} from "react-native-push-notification";
import { delay } from "redux-saga";
import { call, put, race, select, spawn, take, takeEvery, takeLatest } from "redux-saga/effects";
import { MODALS } from "../../navigation/routes";
import { getToken } from "../../services/storage";
import { appStateChannel } from "../app/app.channels";
import { getRouteState } from "../app/app.selectors";
import { CHALLENGE_START_SUCCESS } from "../levels/levels.actions";
import { LOGOUT, updateUserConsent } from "../user/user.actions";
import { ADD_DEVICE_TOKEN, addDeviceToken, pushNotificationReceived, setPushPermissions } from "./device.actions";
import { REQUIRE_PUSH_ENABLED } from "./device.actions";
import { createPushNotificationsChannel, createPushPermissionsChannel } from "./device.channels";
import { getPushNotifications, PushPermissions, PushPermissionsEnum } from "./device.selectors";

function* registerIntercom({ payload }: ReturnType<typeof addDeviceToken>) {
    yield spawn(() => Intercom.sendTokenToIntercom(payload.deviceToken));
    yield spawn(() => Mixpanel.addPushDeviceToken(payload.deviceToken));
}

function* checkPermissions() {
    const perms = yield select(getPushNotifications);
    // android defaults to true
    let status: PushPermissions = PushPermissionsEnum.enabled;

    if (Platform.OS === "ios") {
        const channel = yield call(createPushPermissionsChannel);
        const permissions: PushNotificationPermissions = yield take(channel);
        status = permissions.alert
            ? PushPermissionsEnum.enabled
            : perms.requested
            ? PushPermissionsEnum.denied
            : PushPermissionsEnum.notyet;
        channel.close();
    }

    yield put(setPushPermissions({ status }));

    const { token } = yield race({
        timeout: call(delay, 1000),
        token: call(getToken)
    });

    // update mongo consent
    if (token && perms.status !== status) {
        yield put(updateUserConsent({ pushNotifications: status === PushPermissionsEnum.enabled }));
    }
}

function* showPushNotificationModal() {
    const permissions = yield select(getPushNotifications);

    if (permissions.status !== "enabled") {
        const currentRoute = yield select(getRouteState);

        if (currentRoute !== MODALS.pushNotifications) {
            yield call(() =>
                Navigation.showModal({
                    component: {
                        id: MODALS.pushNotifications,
                        name: MODALS.pushNotifications,
                        passProps: {
                            fromChallenge: true,
                            permissions
                        }
                    }
                })
            );
        }
    }
}

function* listenForPermissionsChange() {
    const channel = yield call(appStateChannel);
    yield call(checkPermissions);

    while (true) {
        const state = yield take(channel);

        if (state === "active") {
            yield call(checkPermissions);
        }
    }
}

function* registerPush() {
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

function* unregisterPushNotifications() {
    yield call(() => PushNotification.cancelAllLocalNotifications);
    yield call(() => PushNotification.setApplicationIconBadgeNumber(0));
    yield call(() => PushNotification.unregister);
}

function* onLogout() {
    yield call(() => Intercom.reset());
}

function* requestPush() {
    const { status } = yield select(getPushNotifications);

    if (status !== "enabled") {
        yield call(() => {
            PushNotification.requestPermissions();
        });
    }
}

export default [
    takeLatest("INIT", registerPush),
    takeLatest("INIT", listenForPermissionsChange),
    takeLatest(ADD_DEVICE_TOKEN, registerIntercom),
    takeLatest(CHALLENGE_START_SUCCESS, showPushNotificationModal),
    takeLatest(LOGOUT, unregisterPushNotifications),
    takeLatest(LOGOUT, onLogout),
    takeEvery(REQUIRE_PUSH_ENABLED, requestPush)
];
