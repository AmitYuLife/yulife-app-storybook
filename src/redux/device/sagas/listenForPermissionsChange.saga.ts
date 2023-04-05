import { getToken } from "@services/storage";
import { Platform, AppStateStatus } from "react-native";
import { PushNotificationPermissions } from "react-native-push-notification";
import { PERMISSIONS, check, PermissionStatus } from "react-native-permissions";
import { Style } from "@styles";
import { call, put, race, select, take, delay } from "redux-saga/effects";
import { Unpacked } from "@utils/types";
import { appStateChannel } from "../../app/app.channels";
import { updateUserConsent } from "../../user/user.actions";
import { setPushPermissions } from "../device.actions";
import { createPushPermissionsChannel } from "../device.channels";
import { getPushNotifications, PushPermissions, PushPermissionsEnum } from "../device.selectors";

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
  let status: PushPermissions = PushPermissionsEnum.enabled;

  if (Platform.OS === "ios") {
    const channel: ReturnType<typeof createPushPermissionsChannel> = yield call(createPushPermissionsChannel);
    const permissions: PushNotificationPermissions = yield take(channel);
    status = buildIosPermissionStatus(perms, permissions);
    channel.close();
  }

  if (Style.isAndroid13AndHigher()) {
    const result: PermissionStatus = yield call(check, PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
    status = buildAndroidPermissionStatus(result);
  }

  yield put(setPushPermissions({ status }));

  const { token }: { timeout: string | true; token: Unpacked<typeof getToken> } = yield race({
    timeout: delay(1000),
    token: call(getToken),
  });

  // update mongo consent
  if (token && perms.status !== status) {
    yield put(updateUserConsent({ pushNotifications: status === PushPermissionsEnum.enabled }));
  }
}

const buildIosPermissionStatus = (
  currentPermissions: ReturnType<typeof getPushNotifications>,
  permissions: PushNotificationPermissions
) => {
  if (permissions.alert) {
    return PushPermissionsEnum.enabled;
  }

  if (currentPermissions.requested) {
    return PushPermissionsEnum.denied;
  }

  return PushPermissionsEnum.notyet;
};

const buildAndroidPermissionStatus = (status: PermissionStatus) => {
  switch (status) {
    case "granted":
    case "limited":
      return PushPermissionsEnum.enabled;
    case "blocked":
    case "unavailable":
      return PushPermissionsEnum.denied;
    case "denied": // denied is default android >=13 state
    default:
      return PushPermissionsEnum.notyet;
  }
};
