import Logger from "@services/logger/logger";
import { call, select, spawn } from "redux-saga/effects";
import { getIsOnboardingRedeemed } from "../onboarding.selectors";
import redeemOnboarding from "./redeemOnboarding.helper";

export default function* onboardOnGetUser() {
  try {
    const isOnboardingRedeemed: ReturnType<typeof getIsOnboardingRedeemed> = yield select(getIsOnboardingRedeemed);

    if (!isOnboardingRedeemed) {
      yield call(redeemOnboarding);
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "onboardOnGetUser" });
    });
  }
}
