import Logger from "@services/logging/logger";
import moment from "moment";
import { call, put, spawn } from "redux-saga/effects";
import { loginUserSuccess } from "../../user/user.actions";

import { setShowIntro } from "../onboarding.actions";
import redeemOnboarding from "./redeemOnboarding.helper";
import sendHistoricalData from "./sendHistoricalData.helper";

export default function* onboardOnLogin({ payload }: ReturnType<typeof loginUserSuccess>) {
    try {
        if (!payload.loginUser.user.redeemedOnboarding) {
            yield call(sendHistoricalData, moment());
            yield put(setShowIntro(true));
            yield call(redeemOnboarding);
        }
    } catch (e) {
        yield spawn(() => Logger.logMixpanelError(e, "onboardOnLogin"));
    }
}
