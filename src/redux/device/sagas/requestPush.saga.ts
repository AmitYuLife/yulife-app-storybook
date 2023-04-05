import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import { call, select } from "redux-saga/effects";
import { getPushNotifications } from "../device.selectors";
import { PERMISSIONS, check, request } from "react-native-permissions";
import { Style } from "@styles";

const requestPermissions = async () => {
  if (Style.isAndroid13AndHigher()) {
    const result = await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);

    if (result !== "granted") {
      request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
    }
  }

  if (Platform.OS === "ios") {
    PushNotification.requestPermissions();
  }
};

export default function* requestPushSaga() {
  const { status } = yield select(getPushNotifications);

  if (status !== "enabled") {
    yield call(requestPermissions);
  }
}
