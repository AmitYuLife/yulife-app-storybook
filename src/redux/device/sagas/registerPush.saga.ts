import { PushNotification as IPushNotification } from "react-native-push-notification";
import { call, put, take } from "redux-saga/effects";
import { addDeviceToken, pushNotificationReceived } from "../device.actions";
import { createPushNotificationsChannel } from "../device.channels";

export default function* registerPushSaga() {
  const channel: ReturnType<typeof createPushNotificationsChannel> = yield call(createPushNotificationsChannel);
  let result: IPushNotification & { os: string; token: string };

  while (true) {
    result = yield take(channel);

    if (result.token) {
      yield put(addDeviceToken({ deviceToken: result.token }));
    } else {
      // allow other modules to respond to a push
      yield put(pushNotificationReceived(result));
    }
  }
}
