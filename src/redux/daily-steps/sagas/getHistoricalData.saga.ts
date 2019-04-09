import addHistoricalSteps from "@graphql/challenges/addHistoricalSteps.gql";
import getCurrentUserWithClient from "@graphql/user/getCurrentUser.gql";
import { querySteps } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { pathOr } from "@services/utils";
import { call, spawn } from "redux-saga/effects";

export default function* getHistoricalDataSaga() {
    try {
        const res = yield call(getCurrentUserWithClient);
        const onboardingDate = pathOr<string>(res, "data.getCurrentUser.onboardingDate", "");

        if (onboardingDate && onboardingDate.length === 19) {
            const { results } = yield call(querySteps, 60, 1);

            if (!!results.length) {
                yield call(addHistoricalSteps, results, false);
            }
        }
    } catch (e) {
        yield spawn(() => Logger.logMixpanelError(e, "getHistoricalData"));
        yield spawn(() => Logger.logIntercomEvent("historical_steps_sync_failed", { message: e.message }));
    }
}
