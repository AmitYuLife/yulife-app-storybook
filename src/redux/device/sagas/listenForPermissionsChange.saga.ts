import { getToken } from "@services/storage";
import { AppStateStatus } from "react-native";
import { getPermissionsAsync, NotificationPermissionsStatus } from "expo-notifications";
import { call, put, race, select, take, delay } from "redux-saga/effects";
import { Unpacked } from "@utils/types";
import { appStateChannel } from "../../app/app.channels";
import { updateUserConsent } from "../../user/user.actions";
import { setPushPermissions } from "../device.actions";
import { getPushNotifications } from "../device.selectors";
import { PushPermissionsStatus } from "../device.types";

export default function* listenForPermissionsChangeSaga() {
  const channel: ReturnType<typeof appStateChannel> = yield call(appStateChannel);
  yield call(checkPermissions);

  while (true) {
    const state: AppStateStatus = yield take(channel);

    if (state === "active") {
      yield call(checkPermissions);
    }
  }
}

export function* checkPermissions() {
  const perms: ReturnType<typeof getPushNotifications> = yield select(getPushNotifications);

  const result: NotificationPermissionsStatus = yield call(getPermissionsAsync);
  const status = convertExpoPermissionsToRedux(result);

  yield put(setPushPermissions({ status }));

  const { token }: { timeout: string | true; token: Unpacked<typeof getToken> } = yield race({
    timeout: delay(1000),
    token: call(getToken),
  });

  // update mongo consent
  if (token && perms.status !== status) {
    yield put(updateUserConsent({ pushNotifications: status === PushPermissionsStatus.enabled }));
  }
}

const convertExpoPermissionsToRedux = (permissions: NotificationPermissionsStatus) => {
  if (permissions.granted) {
    return PushPermissionsStatus.enabled;
  }

  switch (permissions.status) {
    case "granted":
      return PushPermissionsStatus.enabled;
    case "denied":
      return PushPermissionsStatus.denied;
    case "undetermined":
    default:
      return PushPermissionsStatus.notyet;
  }
};
