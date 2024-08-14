import Logger from "@services/logging/logger";
import { call, put, spawn } from "redux-saga/effects";
import { getUserDataStart, getUserStart } from "../../user/user.actions";
import { AppDataType } from "../../user/user.types";
import { setRedeemedOnboarding } from "../onboarding.actions";
import client from "@graphql/_core/client";
import { UpsertOnboardingChallengeMutation, gql } from "@graphql/__generated";
import { MutationResult } from "@apollo/client";

export default function* redeemOnboarding() {
  try {
    const { data }: MutationResult<UpsertOnboardingChallengeMutation> = yield call(() =>
      client().mutate({ mutation: gql("UpsertOnboardingChallengeDocument") })
    );

    if (data?.upsertOnboardingChallenge?.yuCoinAwarded) {
      yield put(setRedeemedOnboarding({ yuCoinAwarded: data.upsertOnboardingChallenge.yuCoinAwarded }));
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
