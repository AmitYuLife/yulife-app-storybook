import Logger from "@services/logging/logger";
import moment from "moment";
import { call, spawn } from "redux-saga/effects";
import { loginUserSuccess } from "../../user/user.actions";

import redeemOnboarding from "./redeemOnboarding.helper";
import sendHistoricalData from "./sendHistoricalData.helper";

export default function* onboardOnLogin({ payload }: ReturnType<typeof loginUserSuccess>) {
    try {
        if (!payload.loginUser.user.redeemedOnboarding) {
            yield call(sendHistoricalData, moment());
            yield call(redeemOnboarding);
        }
    } catch (e) {
        yield spawn(() => Logger.logMixpanelError(e, "onboardOnLogin"));
    }
}
