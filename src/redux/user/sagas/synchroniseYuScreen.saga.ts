import { call, put, select, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { yuScreenSynchronised } from "@redux/user/user.actions";
import { getYuScreenNotification } from "../user.selectors";
import { getYuScreen } from "@graphql/yuscreen/getYuScreen.gql";

export default function* synchroniseYuScreenSaga() {
  try {
    const hasNotification: ReturnType<typeof getYuScreenNotification> = yield select(getYuScreenNotification);

    // New notification sent for the customer. Update the YuScreen product slots.
    if (hasNotification) {
      yield call(getYuScreen);
    }

    yield put(yuScreenSynchronised());
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "synchroniseYuScreen" });
    });
  }
}
