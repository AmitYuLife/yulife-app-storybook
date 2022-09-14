import { call, put, select, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { yuScreenSynchronised } from "@redux/user/user.actions";
import { getYuScreenProductSlots } from "@graphql/yuscreen";
import { getUserFeatures, getYuScreenNotification } from "../user.selectors";
import { getYuScreen } from "@graphql/yuscreen/getYuScreen.gql";

export default function* synchroniseYuScreenSaga() {
  try {
    const hasNotification: ReturnType<typeof getYuScreenNotification> = yield select(getYuScreenNotification);
    const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

    // New notification sent for the customer. Update the YuScreen product slots.
    if (hasNotification) {
      const updateYuScreen = userFeatures.yuScreenV4beta ? getYuScreen : getYuScreenProductSlots;
      yield call(updateYuScreen);
    }

    yield put(yuScreenSynchronised());
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "synchroniseYuScreen" });
    });
  }
}
