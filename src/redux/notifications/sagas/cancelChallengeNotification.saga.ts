import * as ExpoNotification from "expo-notifications";
import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "../../levels/levels.selectors";
import Logger from "@services/logger/logger";

export default function* cancelChallengeNotificationSaga() {
  try {
    const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    if (active.id) {
      yield call(() => ExpoNotification.cancelScheduledNotificationAsync(active.id));
    }
  } catch (error) {
    Logger.notify(error, { file: "cancelChallengeNotificationSaga" });
  }
}
