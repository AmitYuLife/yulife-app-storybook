import Logger from "@services/logging/logger";
import { put, select, spawn } from "redux-saga/effects";
import { removeYuScreenNotifications } from "../user.actions";
import { getRouteState } from "../../app/app.selectors";
import { ROUTES } from "@navigation/constants";
import { getYuScreenNotification } from "../user.selectors";

export default function* updateYuScreenNotification() {
  try {
    const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
    const hasYuScreenNotification: ReturnType<typeof getYuScreenNotification> = yield select(getYuScreenNotification);
    if (currentRoute === ROUTES.yuScreen && hasYuScreenNotification) {
      yield put(removeYuScreenNotifications());
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "updateYuScreenNotification" });
    });
  }
}
