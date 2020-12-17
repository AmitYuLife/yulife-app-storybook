import upsertOnboardingChallenge from "@graphql/challenges/upsertOnboardingChallenge.gql";
import Logger from "@services/logging/logger";
import { call, put, spawn } from "redux-saga/effects";
import { getUserStart } from "../../user/user.actions";
import { setRedeemedOnboarding } from "../onboarding.actions";

export default function* redeemOnboarding() {
  try {
    const { data } = yield call(upsertOnboardingChallenge);

    if (data && data.upsertPassiveChallenge) {
      yield put(setRedeemedOnboarding(data.upsertPassiveChallenge.challenge.yuCoinAwarded));
      yield put(getUserStart());
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "onboarding_challenge_failed" });
      Logger.logEvent("onboarding_challenge_failed", { message: e.message });
    });
  }
}
