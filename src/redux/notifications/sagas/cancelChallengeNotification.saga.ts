import PushNotification from "react-native-push-notification";
import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "../../levels/levels.selectors";
import { numericId } from "../notifications.helpers";

export default function* cancelChallengeNotificationSaga() {
  const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  const id = Number(numericId(active.levelSlotId)).toString() as string;

  if (active.levelSlotId) {
    yield call(() => PushNotification.cancelLocalNotifications({ id }));
  }
}
