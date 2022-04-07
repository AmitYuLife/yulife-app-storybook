import { call, put, select, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { yuScreenSynchronised } from "@redux/user/user.actions";
import { getYuScreenProductSlots } from "@graphql/yuscreen";
import { getUserProfile } from "../user.selectors";

export default function* synchroniseYuScreenSaga() {
  try {
    const userProfile: ReturnType<typeof getUserProfile> = yield select(getUserProfile);

    const hasNotification = userProfile?.notification?.hasYuScreenNotification;

    // New notification sent for the customer. Update the YuScreen product slots.
    if (hasNotification) {
      yield call(getYuScreenProductSlots);
    }

    yield put(yuScreenSynchronised());
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "synchroniseYuScreen" });
    });
  }
}
