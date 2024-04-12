import * as ExpoNotification from "expo-notifications";
import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "../../levels/levels.selectors";
import Logger from "@services/logging/logger";

export default function* cancelChallengeNotificationSaga() {
  try {
    const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);
    const idToCancel = active.levelSlotId || active.id;

    if (idToCancel) {
      yield call(() => ExpoNotification.cancelScheduledNotificationAsync(idToCancel));
    }
  } catch (error) {
    Logger.error(error, { file: "cancelChallengeNotificationSaga" });
  }
}
