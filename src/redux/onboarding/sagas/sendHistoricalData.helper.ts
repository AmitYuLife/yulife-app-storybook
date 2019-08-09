import addHistoricalSteps from "@graphql/challenges/addHistoricalSteps.gql";
import { queryHistoricalData } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { Moment } from "moment";
import { call, put, spawn } from "redux-saga/effects";
import { SET_HISTORICAL_DATA_COLLECTED } from "../onboarding.actions";

export default function* sendHistoricalData(onboardingDate: Moment) {
    try {
        const { results } = yield call(queryHistoricalData, onboardingDate);

        if (!!results.length) {
            yield call(addHistoricalSteps, results, false);
            yield put({ type: SET_HISTORICAL_DATA_COLLECTED });
        }
    } catch (e) {
        yield spawn(() => Logger.logEvent("historical_steps_sync_failed", { message: e.message }));
    }
}
