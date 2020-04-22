import { MODALS } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { call, select } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";
import { getCopy } from "../../copy/copy.selectors";
import { getPushNotifications } from "../device.selectors";

export default function* showPushNotificationModalSaga() {
  const permissions = yield select(getPushNotifications);
  const copy = yield select((state: any) => getCopy(state, "pushNotification"));

  if (permissions.status !== "enabled") {
    const currentRoute = yield select(getRouteState);

    if (currentRoute !== MODALS.pushNotifications) {
      yield call(() =>
        Navigation.showModal({
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
