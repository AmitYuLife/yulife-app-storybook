import Logger from "@services/logger/logger";
import { call, spawn } from "redux-saga/effects";
import { loginUserSuccess } from "../../user/user.actions";
import redeemOnboarding from "./redeemOnboarding.helper";

export default function* onboardOnLogin({ payload }: ReturnType<typeof loginUserSuccess>) {
  try {
    if (!payload.onboarding.redeemedOnboarding) {
      yield call(redeemOnboarding);
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "onboardOnLogin" });
    });
  }
}
