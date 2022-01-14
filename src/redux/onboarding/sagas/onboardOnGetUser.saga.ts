import Logger from "@services/logging/logger";
import { call, put, select, spawn } from "redux-saga/effects";
import { getIsOnboardingRedeemed } from "../onboarding.selectors";
import { setShowIntro } from "../onboarding.actions";
import redeemOnboarding from "./redeemOnboarding.helper";

export default function* onboardOnGetUser() {
  try {
    const isOnboardingRedeemed: ReturnType<typeof getIsOnboardingRedeemed> = yield select(getIsOnboardingRedeemed);

    if (!isOnboardingRedeemed) {
      yield call(redeemOnboarding);
      yield put(setShowIntro(true));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "onboardOnGetUser" });
    });
  }
}
