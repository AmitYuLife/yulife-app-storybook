import { markNotificationsAsViewedByType } from "@graphql/notifications";
import Logger from "@services/logging/logger";
import { call, spawn } from "redux-saga/effects";

export default function* removeYuScreenNotification() {
  try {
    yield call(markNotificationsAsViewedByType, { type: "yuScreen" });
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "updateYuScreenNotification" });
    });
  }
}
