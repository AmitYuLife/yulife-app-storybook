import { getToken } from "@services/storage";
import { Platform } from "react-native";
import { PushNotificationPermissions } from "react-native-push-notification";
import { delay } from "redux-saga";
import { call, put, race, select, take } from "redux-saga/effects";
import { appStateChannel } from "../../app/app.channels";
import { updateUserConsent } from "../../user/user.actions";
import { setPushPermissions } from "../device.actions";
import { createPushPermissionsChannel } from "../device.channels";
import { getPushNotifications, PushPermissions, PushPermissionsEnum } from "../device.selectors";

export default function* listenForPermissionsChangeSaga() {
    const channel = yield call(appStateChannel);
    yield call(checkPermissions);

    while (true) {
        const state = yield take(channel);

        if (state === "active") {
            yield call(checkPermissions);
        }
    }
}

export function* checkPermissions() {
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
