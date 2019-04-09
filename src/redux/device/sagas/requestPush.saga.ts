import PushNotification from "react-native-push-notification";
import { call, select } from "redux-saga/effects";
import { getPushNotifications } from "../device.selectors";

export default function* requestPushSaga() {
    const { status } = yield select(getPushNotifications);

    if (status !== "enabled") {
        yield call(() => {
            PushNotification.requestPermissions();
        });
    }
}
