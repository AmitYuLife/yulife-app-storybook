import upsertOnboardingChallenge from "@graphql/challenges/upsertOnboardingChallenge.gql";
import Logger from "@services/logging/logger";
import { call, put, spawn } from "redux-saga/effects";
import { AppDataType, getUserDataStart, getUserStart } from "../../user/user.actions";
import { setRedeemedOnboarding } from "../onboarding.actions";

export default function* redeemOnboarding() {
  try {
    const { data } = yield call(upsertOnboardingChallenge);

    if (data?.upsertOnboardingChallenge?.yuCoinAwarded) {
      yield put(setRedeemedOnboarding(data.upsertOnboardingChallenge.yuCoinAwarded));
      yield put(getUserStart());
      yield put(getUserDataStart({ types: [AppDataType.coinLedger] }));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "onboarding_challenge_failed" });
      Logger.logEvent("onboarding_challenge_failed", { message: e.message });
    });
  }
}
