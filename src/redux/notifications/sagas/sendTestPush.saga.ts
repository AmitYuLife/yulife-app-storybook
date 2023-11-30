import * as ExpoNotification from "expo-notifications";
import { call } from "redux-saga/effects";
import { expoDefaultNotificationTrigger, expoDefaultNotificationContent } from "../notifications.helpers";

export default function* sendTestPushSaga() {
  yield call(() => {
    ExpoNotification.scheduleNotificationAsync({
      content: {
        ...expoDefaultNotificationContent,
        title: "My Notification Title",
        body: "My Notification Message",
      },
      trigger: {
        ...expoDefaultNotificationTrigger,
        seconds: 1,
      },
    });
  });
}
