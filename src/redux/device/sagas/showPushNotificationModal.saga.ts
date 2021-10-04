import { MODALS } from "@navigation/constants";
import { call, select } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";
import { getCopy } from "../../copy/copy.selectors";
import { getPushNotifications } from "../device.selectors";
import { showYuModal } from "@navigation/root";

export default function* showPushNotificationModalSaga() {
  const permissions: ReturnType<typeof getPushNotifications> = yield select(getPushNotifications);
  const copy: ReturnType<typeof getCopy> = yield select((state: any) => getCopy(state, "pushNotification"));

  if (permissions.status !== "enabled") {
    const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

    if (currentRoute !== MODALS.pushNotifications) {
      yield call(() =>
        showYuModal({
          component: {
            id: MODALS.pushNotifications,
            name: MODALS.pushNotifications,
            passProps: {
              fromChallenge: true,
              permissions,
              copy,
            },
          },
        })
      );
    }
  }
}
