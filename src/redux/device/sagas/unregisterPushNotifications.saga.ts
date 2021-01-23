import PushNotification from "react-native-push-notification";
import { call } from "redux-saga/effects";

export default function* unregisterPushNotificationsSaga() {
  yield call(() => {
    PushNotification.cancelAllLocalNotifications();
    PushNotification.setApplicationIconBadgeNumber(0);
    PushNotification.unregister();
  });
}
