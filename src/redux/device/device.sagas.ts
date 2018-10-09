import moment from "moment";
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
import Logger from "../../services/logging/logger";
import { getToken } from "../../services/storage";
import { appStateChannel } from "../app/app.channels";
import { getRouteState } from "../app/app.selectors";
import {
    UPDATE_DAILY_STEPS_SUCCESS,
    updateDailyStepsNotification,
    UpdateDailyStepsSuccessAction
} from "../daily-steps/daily-steps.actions";
import { dailyStepsNotificationSelector } from "../daily-steps/daily-steps.selectors";
import { CHALLENGE_CANCEL, CHALLENGE_START_SUCCESS, ChallengeStartSuccessActionResult } from "../levels/levels.actions";
import { activeLevelSelector } from "../levels/levels.selectors";
import { LOGOUT, updateUserConsent } from "../user/user.actions";
import {
    ADD_DEVICE_TOKEN,
    addDeviceToken,
    AddDeviceTokenActionResult,
    pushNotificationReceived,
    SEND_TEST_LOCAL_PUSH,
    setPushPermissions
} from "./device.actions";
import { REQUIRE_PUSH_ENABLED } from "./device.actions";
import { createPushNotificationsChannel, createPushPermissionsChannel } from "./device.channels";
import { pushNotificationsSelector, PushPermissions, PushPermissionsEnum } from "./device.selectors";

const numericId = (id: string) => id.replace(/\D/g, "").substring(0, 9);

function* registerIntercom({ payload }: AddDeviceTokenActionResult) {
    yield spawn(() => Intercom.sendTokenToIntercom(payload.deviceToken));
    yield spawn(() => Mixpanel.addPushDeviceToken(payload.deviceToken));
}

function* checkPermissions() {
    const perms = yield select(pushNotificationsSelector);
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

    // pop up the modal
    if (
        token &&
        status !== "enabled" &&
        (!perms.skipped ||
            (moment(perms.skipped)
                .add(7, "days")
                .isBefore(moment()) &&
                !perms.denied))
    ) {
        const currentRoute = yield select(getRouteState);

        if (currentRoute !== MODALS.pushNotifications) {
            yield call(async () =>
                Navigation.showModal({
                    component: {
                        id: MODALS.pushNotifications,
                        name: MODALS.pushNotifications,
                        passProps: {
                            permissions: perms
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
        yield spawn(() => Mixpanel.initPushHandling(Config.GCM_SENDER_ID));
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

function* requestPush() {
    const { status } = yield select(pushNotificationsSelector);

    if (status !== "enabled") {
        yield call(() => {
            PushNotification.requestPermissions();
        });
    }
}

function* cancelChallengeNotificationSaga() {
    const active = yield select(activeLevelSelector);

    if (active.levelSlotId) {
        yield call(() => PushNotification.cancelLocalNotifications({ id: numericId(active.levelSlotId) }));
    }
}

function* scheduleChallengeNotificationSaga({ payload: { createActiveChallenge } }: ChallengeStartSuccessActionResult) {
    if (!createActiveChallenge.challenge) {
        return null;
    }

    const { endDateTime, levelSlotId } = createActiveChallenge.challenge;
    const fixedId = numericId(levelSlotId);

    yield call(() =>
        PushNotification.localNotificationSchedule({
            autoCancel: true, // (optional) default: true
            date: moment(endDateTime).toDate(),
            group: "Yu Life Challenges", // (optional) add group to message
            id: fixedId, // (optional)
            largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
            message: "Time's up! Check how you did on your latest challenge.",
            ongoing: false, // (optional) set whether this is an "ongoing" notification
            playSound: false, // (optional) default: true
            smallIcon: "ic_notification", // (optional) default: "ic_notification"
            soundName: "default", // (optional) Sound to play when the notification is shown
            tag: "challenge_complete", // (optional) add tag to message
            title: "Challenge Completed", // (optional, for iOS this is only used in apple watch)
            userInfo: Platform.OS === "ios" ? { id: fixedId } : null, // required to cancel iOS local notification
            vibrate: true, // (optional) default: true
            vibration: 300 // vibration length in milliseconds, ignored if vibrate=false, default: 1000
        })
    );
}

function* showDailyStepsNotification({ payload: { upsertPassiveChallenge } }: UpdateDailyStepsSuccessAction) {
    if (!upsertPassiveChallenge.challenge) {
        return null;
    }

    const {
        challenge: {
            yuCoinAwarded,
            incomingData: { steps }
        }
    } = upsertPassiveChallenge;
    const notifiedAt = yield select(dailyStepsNotificationSelector);
    const notShowedYet = moment().format("YYYY-MM-DD") !== notifiedAt;
    const enoughData = steps >= 12000;

    if (notShowedYet && enoughData) {
        yield call(() =>
            PushNotification.localNotification({
                group: "Yu Life Steps", // (optional) add group to message
                message: `Well done! Congratulations, you've earned ${yuCoinAwarded} yucoin today.`,
                soundName: "default", // (optional) Sound to play when the notification is shown
                tag: "daily_steps_complete", // (optional) add tag to message
                vibration: 300 // vibration length in milliseconds, ignored if vibrate=false, default: 1000
            })
        );
        yield put(updateDailyStepsNotification());
    }
}

function* sendTestPush() {
    yield call(() =>
        PushNotification.localNotificationSchedule({
            autoCancel: true, // (optional) default: true
            bigText: "My big text that will be shown when notification is expanded", // (optional)
            color: "red", // (optional) default: system default
            date: new Date(Date.now() + 5 * 1000),
            group: "group", // (optional) add group to message
            id: "0", // (optional)
            largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
            message: "My Notification Message", // (required)
            ongoing: false, // (optional) set whether this is an "ongoing" notification
            playSound: false, // (optional) default: true
            repeatType: "day",
            smallIcon: "ic_notification", // (optional) default: "ic_notification"
            soundName: "default", // (optional) Sound to play when the notification is shown
            subText: "This is a subText", // (optional) default: none
            tag: "some_tag", // (optional) add tag to message
            ticker: "My Notification Ticker", // (optional)
            title: "My Notification Title", // (optional, for iOS this is only used in apple watch)
            vibration: 300 // vibration length in milliseconds, ignored if vibrate=false, default: 1000
        })
    );
}

function* unregisterPushNotifications() {
    yield call(() => PushNotification.cancelAllLocalNotifications);
    yield call(() => PushNotification.setApplicationIconBadgeNumber(0));
    yield call(() => PushNotification.unregister);
}

function* onLogout() {
    yield call(Logger.logEvent, "log_out");
    yield call(() => Intercom.reset());
}

export default [
    takeLatest("INIT", registerPush),
    takeLatest("INIT", listenForPermissionsChange),
    takeLatest(ADD_DEVICE_TOKEN, registerIntercom),
    takeEvery(CHALLENGE_CANCEL, cancelChallengeNotificationSaga),
    takeEvery(CHALLENGE_START_SUCCESS, scheduleChallengeNotificationSaga),
    takeLatest(UPDATE_DAILY_STEPS_SUCCESS, showDailyStepsNotification),
    takeLatest(LOGOUT, unregisterPushNotifications),
    takeLatest(LOGOUT, onLogout),
    takeEvery(REQUIRE_PUSH_ENABLED, requestPush),
    takeEvery(SEND_TEST_LOCAL_PUSH, sendTestPush)
];
