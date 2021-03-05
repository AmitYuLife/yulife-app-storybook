import Logger from "@services/logging/logger";
import moment from "moment";
import { call, put, select, spawn } from "redux-saga/effects";

import { getUserSuccess } from "../../user/user.actions";
import {
  getIsHistoricalDataCollected,
  getIsHistoricalMeditationDataCollected,
  getIsOnboardingRedeemed,
} from "../onboarding.selectors";

import { getUserFeatures } from "../../user/user.selectors";
import { setShowIntro } from "../onboarding.actions";
import redeemOnboarding from "./redeemOnboarding.helper";
import sendHistoricalData from "./sendHistoricalData.helper";
import { sendHistoricalMeditationData } from "./sendHistoricalData.helper";

export default function* onboardOnGetUser({ payload }: ReturnType<typeof getUserSuccess>) {
  try {
    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    const isHistoricalDataCollected: ReturnType<typeof getIsHistoricalDataCollected> = yield select(
      getIsHistoricalDataCollected
    );
    const isHistoricalMeditationDataCollected: ReturnType<typeof getIsHistoricalMeditationDataCollected> = yield select(
      getIsHistoricalMeditationDataCollected
    );
    const isOnboardingRedeemed: ReturnType<typeof getIsOnboardingRedeemed> = yield select(getIsOnboardingRedeemed);

    if (!isHistoricalDataCollected || !isHistoricalMeditationDataCollected) {
      const onboardingDate = payload && payload.getCurrentUser ? payload.getCurrentUser.onboardingDate : null;

      if (onboardingDate && onboardingDate.length === 19) {
        const onboardingMoment = moment(onboardingDate);

        if (!isHistoricalDataCollected) {
          yield call(sendHistoricalData, onboardingMoment);
        }

        if (!isHistoricalMeditationDataCollected && features.usePassiveMeditation) {
          yield call(sendHistoricalMeditationData, onboardingMoment);
        }
      }
    }

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
