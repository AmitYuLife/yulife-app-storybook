import Logger from "@services/logging/logger";
import moment from "moment";
import { call, put, select, spawn } from "redux-saga/effects";
import { loginUserSuccess } from "../../user/user.actions";

import { getUserFeatures } from "../../user/user.selectors";
import { setShowIntro } from "../onboarding.actions";
import redeemOnboarding from "./redeemOnboarding.helper";
import sendHistoricalData, { sendHistoricalMeditationData } from "./sendHistoricalData.helper";

export default function* onboardOnLogin({ payload }: ReturnType<typeof loginUserSuccess>) {
  try {
    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

    if (!payload.loginUser.user.redeemedOnboarding) {
      yield call(sendHistoricalData, moment());
      if (features.usePassiveMeditation) {
        yield call(sendHistoricalMeditationData, moment());
      }

      yield put(setShowIntro(true));
      yield call(redeemOnboarding);
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "onboardOnLogin" });
    });
  }
}
