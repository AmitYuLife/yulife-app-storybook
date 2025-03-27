import * as ExpoNotification from "expo-notifications";
import { call, select } from "redux-saga/effects";
import { getPushNotifications } from "../device.selectors";

const requestPermissions = async () => {
  const result = await ExpoNotification.getPermissionsAsync();

  if (!result.granted) {
    ExpoNotification.requestPermissionsAsync();
  }
};

export default function* requestPushSaga() {
  const { status } = yield select(getPushNotifications);

  if (status !== "enabled") {
    yield call(requestPermissions);
  }
}
