import Logger from "@services/logging/logger";
import { call, put, spawn } from "redux-saga/effects";
import { loginUserSuccess } from "../../user/user.actions";
import { setShowIntro } from "../onboarding.actions";
import redeemOnboarding from "./redeemOnboarding.helper";

export default function* onboardOnLogin({ payload }: ReturnType<typeof loginUserSuccess>) {
  try {
    if (!payload.loginUser.user.redeemedOnboarding) {
      yield put(setShowIntro(true));
      yield call(redeemOnboarding);
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "onboardOnLogin" });
    });
  }
}
