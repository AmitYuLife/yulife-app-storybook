import Logger from "@services/logging/logger";
import moment from "moment";
import { call, put, select, spawn } from "redux-saga/effects";

import { getUserSuccess } from "../../user/user.actions";
import { getIsHistoricalDataCollected, getIsOnboardingRedeemed } from "../onboarding.selectors";

import { setShowIntro } from "../onboarding.actions";
import redeemOnboarding from "./redeemOnboarding.helper";
import sendHistoricalData from "./sendHistoricalData.helper";

export default function* onboardOnGetUser({ payload }: ReturnType<typeof getUserSuccess>) {
    try {
        const isHistoricalDataCollected = yield select(getIsHistoricalDataCollected);
        const isOnboardingRedeemed = yield select(getIsOnboardingRedeemed);

        if (!isHistoricalDataCollected) {
            const onboardingDate = payload && payload.getCurrentUser ? payload.getCurrentUser.onboardingDate : null;

            if (onboardingDate && onboardingDate.length === 19) {
                yield call(sendHistoricalData, moment(onboardingDate));
            }
        }

        if (!isOnboardingRedeemed) {
            yield call(redeemOnboarding);
            yield put(setShowIntro(true));
        }
    } catch (e) {
        yield spawn(() => Logger.logMixpanelError(e, "onboardOnGetUser"));
    }
}
