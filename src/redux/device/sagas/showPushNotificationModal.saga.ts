import { MODALS } from "@navigation/constants";
import { call, select } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";
import { getPushNotifications } from "../device.selectors";
import { showYuModal } from "@navigation/root";
import { getActiveLevel } from "@redux/levels/levels.selectors";
import { PushPermissionsStatus } from "../device.types";
import { PUSH_NOTIFICATION_DENY_LIMIT } from "../device.constants";

export default function* showPushNotificationModalSaga() {
  const permissions: ReturnType<typeof getPushNotifications> = yield select(getPushNotifications);
  const activeChallenge: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  if (permissions.status === PushPermissionsStatus.notyet && permissions.denyCount < PUSH_NOTIFICATION_DENY_LIMIT) {
    const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

    if (currentRoute !== MODALS.pushNotifications && activeChallenge.subtype !== "sudoku") {
      yield call(() =>
        showYuModal({
          component: {
            id: MODALS.pushNotifications,
            name: MODALS.pushNotifications,
            passProps: {
              fromChallenge: true,
              permissions,
            },
          },
        })
      );
    }
  }
}
