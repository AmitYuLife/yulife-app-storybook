import * as ExpoNotification from "expo-notifications";
import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "../../levels/levels.selectors";
import { numericId } from "../notifications.helpers";
import Logger from "@services/logging/logger";

export default function* cancelChallengeNotificationSaga() {
  try {
    const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    if (active.levelSlotId) {
      const id = numericId(active.levelSlotId);

      yield call(() => ExpoNotification.cancelScheduledNotificationAsync(id));
    }
  } catch (error) {
    Logger.error(error, { file: "cancelChallengeNotificationSaga" });
  }
}
