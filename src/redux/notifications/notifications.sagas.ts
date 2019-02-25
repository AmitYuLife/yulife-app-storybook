import moment from "moment";
import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import { call, select, takeEvery } from "redux-saga/effects";
import { CANCEL_LOCAL_PUSH } from "../device/device.actions";
import { CHALLENGE_CANCEL, CHALLENGE_START_SUCCESS, challengeStartSuccessAction } from "../levels/levels.actions";
import { getActiveLevel } from "../levels/levels.selectors";
import {
    SEND_TEST_LOCAL_PUSH,
    UPDATE_NOTIFICATION_SETTINGS,
    updateNotificationSettings
} from "./notifications.actions";
import { defaultNotificationSettings, getNotificationTitleAndMessage, numericId } from "./notifications.helpers";
import { getChallengeCompletionNotification } from "./notifications.selectors";

function* cancelChallengeNotificationSaga() {
    const active = yield select(getActiveLevel);

    if (active.levelSlotId) {
        yield call(() => PushNotification.cancelLocalNotifications({ id: numericId(active.levelSlotId) }));
    }
}

function* scheduleChallengeNotificationSaga({
    payload: { createActiveChallenge }
}: ReturnType<typeof challengeStartSuccessAction>) {
    if (!createActiveChallenge.challenge) {
        return null;
    }

    const challengeCompletion = yield select(getChallengeCompletionNotification);

    if (challengeCompletion.active) {
        const { endDateTime, levelSlotId } = createActiveChallenge.challenge;
        const fixedId = numericId(levelSlotId);
        const details = getNotificationTitleAndMessage(challengeCompletion.id);

        yield call(() =>
            PushNotification.localNotificationSchedule({
                ...defaultNotificationSettings,
                date: moment(endDateTime).toDate(),
                group: "Yu Life Challenges", // (optional) add group to message
                id: fixedId, // (optional)
                tag: "challenge_complete", // (optional) add tag to message
                userInfo: Platform.OS === "ios" ? { id: fixedId } : null, // required to cancel iOS local notification
                ...details
            })
        );
    }
}

function* sendTestPushSaga() {
    yield call(() =>
        PushNotification.localNotificationSchedule({
            ...defaultNotificationSettings,
            bigText: "My big text that will be shown when notification is expanded", // (optional)
            color: "red", // (optional) default: system default
            date: moment()
                .add(5, "seconds")
                .toDate(),
            group: "group", // (optional) add group to message
            id: "0", // (optional)
            message: "My Notification Message", // (required)
            repeatType: "day",
            subText: "This is a subText", // (optional) default: none
            tag: "some_tag", // (optional) add tag to message
            ticker: "My Notification Ticker", // (optional)
            title: "My Notification Title" // (optional, for iOS this is only used in apple watch)
        })
    );
}

function* updateNotificationSettingsSaga({ payload }: ReturnType<typeof updateNotificationSettings>) {
    if (["dailyChallengeReminder", "streakSaver"].includes(payload.key)) {
        if (payload.active) {
            const today = moment().format("YYYY-MM-DD");
            const dateStr = today + " " + payload.time;

            const details = getNotificationTitleAndMessage(payload.id);

            yield call(() =>
                PushNotification.localNotificationSchedule({
                    ...defaultNotificationSettings,
                    date: moment(dateStr, "YYYY-MM-DD HH:mm").toDate(),
                    group: "yulife notifications", // (optional) add group to message
                    id: payload.id, // (optional)
                    repeatType: "day",
                    userInfo: Platform.OS === "ios" ? { id: payload.id } : null,
                    ...details
                })
            );
        } else {
            yield call(() => PushNotification.cancelLocalNotifications({ id: payload.id }));
        }
    }
}

export default [
    takeEvery(CHALLENGE_CANCEL, cancelChallengeNotificationSaga),
    takeEvery(CANCEL_LOCAL_PUSH, cancelChallengeNotificationSaga),
    takeEvery(CHALLENGE_START_SUCCESS, scheduleChallengeNotificationSaga),
    takeEvery(SEND_TEST_LOCAL_PUSH, sendTestPushSaga),
    takeEvery(UPDATE_NOTIFICATION_SETTINGS, updateNotificationSettingsSaga)
];
