import { call, put, select, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { yuScreenSynchronised } from "@redux/user/user.actions";
import { getTabNotifications } from "../user.selectors";
import { getYuScreen } from "@graphql/yuscreen/getYuScreen.gql";
import { MobileTabs } from "@redux/_core/types";

export default function* synchroniseYuScreenSaga() {
  try {
    const tabNotifications: ReturnType<typeof getTabNotifications> = yield select(getTabNotifications);

    // New notification sent for the customer. Update the YuScreen product slots.
    if (tabNotifications.includes(MobileTabs.YuScreen)) {
      yield call(getYuScreen);
    }

    yield put(yuScreenSynchronised());
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "synchroniseYuScreen" });
    });
  }
}
