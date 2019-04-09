import PushNotification from "react-native-push-notification";
import { call } from "redux-saga/effects";

export default function* unregisterPushNotificationsSaga() {
    yield call(() => PushNotification.cancelAllLocalNotifications);
    yield call(() => PushNotification.setApplicationIconBadgeNumber(0));
    yield call(() => PushNotification.unregister);
}
