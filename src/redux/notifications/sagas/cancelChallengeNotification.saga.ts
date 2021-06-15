import PushNotification from "react-native-push-notification";
import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "../../levels/levels.selectors";
import { numericId } from "../notifications.helpers";
import Logger from "@services/logging/logger";

export default function* cancelChallengeNotificationSaga() {
  try {
    const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    if (active.levelSlotId) {
      const id = Number(numericId(active.levelSlotId)).toString() as string;

      yield call(() => PushNotification.cancelLocalNotifications({ id }));
    }
  } catch (error) {
    Logger.error(error, { file: "cancelChallengeNotificationSaga" });
  }
}
