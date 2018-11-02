import moment from "moment";
import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import { call, select, takeEvery } from "redux-saga/effects";
import { CANCEL_LOCAL_PUSH, SEND_TEST_LOCAL_PUSH } from "../device/device.actions";
import { CHALLENGE_CANCEL, CHALLENGE_START_SUCCESS, ChallengeStartSuccessActionResult } from "../levels/levels.actions";
import { activeLevelSelector } from "../levels/levels.selectors";
import { numericId } from "./notifications.helpers";

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

export default [
    takeEvery(CHALLENGE_CANCEL, cancelChallengeNotificationSaga),
    takeEvery(CANCEL_LOCAL_PUSH, cancelChallengeNotificationSaga),
    takeEvery(CHALLENGE_START_SUCCESS, scheduleChallengeNotificationSaga),
    takeEvery(SEND_TEST_LOCAL_PUSH, sendTestPush)
];
