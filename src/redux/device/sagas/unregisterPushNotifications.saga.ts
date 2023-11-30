import * as ExpoNotification from "expo-notifications";
import { call } from "redux-saga/effects";

export default function* unregisterPushNotificationsSaga() {
  yield call(() => {
    ExpoNotification.cancelAllScheduledNotificationsAsync();
    ExpoNotification.setBadgeCountAsync(0);
    ExpoNotification.unregisterForNotificationsAsync();
  });
}
