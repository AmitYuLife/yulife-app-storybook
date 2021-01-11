import { takeEvery } from "redux-saga/effects";
import { CANCEL_LOCAL_PUSH } from "../../device/device.actions";
import { CHALLENGE_CANCEL, CHALLENGE_START_SUCCESS } from "../../levels/levels.actions";
import { SEND_TEST_LOCAL_PUSH } from "../notifications.actions";
import cancelChallengeNotificationSaga from "./cancelChallengeNotification.saga";
import scheduleChallengeNotificationSaga from "./scheduleChallengeNotification.saga";
import sendTestPushSaga from "./sendTestPush.saga";

export default [
  takeEvery(CHALLENGE_CANCEL, cancelChallengeNotificationSaga),
  takeEvery(CANCEL_LOCAL_PUSH, cancelChallengeNotificationSaga),
  takeEvery(CHALLENGE_START_SUCCESS, scheduleChallengeNotificationSaga),
  takeEvery(SEND_TEST_LOCAL_PUSH, sendTestPushSaga),
];
