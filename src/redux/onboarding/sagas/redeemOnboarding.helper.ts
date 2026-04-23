import EngagementTracking from "@services/logging/engagement-tracking";
import Logger from "@services/logger/logger";
import { call, put, spawn } from "redux-saga/effects";
import { getUserDataStart } from "../../user/user.actions";
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
      yield put(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] }));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "onboarding_challenge_failed" });
      EngagementTracking.logEvent("onboarding_challenge_failed", { message: e.message });
    });
  }
}
