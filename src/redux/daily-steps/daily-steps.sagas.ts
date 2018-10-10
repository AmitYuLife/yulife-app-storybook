import moment from "moment";
import { PedometerResponse } from "react-native-dual-pedometer";
import RNFitKit, { FitKitTypes } from "react-native-fitkit";
import { call, cancel, cancelled, fork, put, select, take } from "redux-saga/effects";
import { ChallengePayload } from "../../graphql/_core/schema";
import upsertStepsChallenge from "../../graphql/challenges/upsertStepsChallenge.gql";
import Logger from "../../services/logging/logger";
import {
    START_DAILY_STEPS,
    STOP_DAILY_STEPS,
    updateDailyStepsFailed,
    updateDailyStepsSuccess
} from "./daily-steps.actions";
import { dailyStepsChannel } from "./daily-steps.channels";
import { getLastUpdated } from "./daily-steps.selectors";

const mapPedometerResults = (results: PedometerResponse): ChallengePayload => ({
    endDateTime: moment(results.endTime).format(),
    startDateTime: moment(results.startTime).format(),
    value: Math.floor(results.steps)
});

export function* listenToDailySteps() {
    const lastUpdated = yield select(getLastUpdated);
    const startOfDay = moment().startOf("day");
    let previousResults = [];

    if (moment(lastUpdated).isBefore(startOfDay)) {
        // get steps from start of last updated date until the end of previous day
        const startTime = moment(lastUpdated).startOf("day").toISOString();
        const endTime = moment().subtract(1, "days").endOf("day").toISOString();

        const authorised = yield call(RNFitKit.authorise, {
            read: [
                FitKitTypes.Types.Steps
            ]
        });

        if (authorised) {
            const results = yield call(RNFitKit.aggregateQuery, {
                aggregateBy: {
                    bucketSize: { value: 1, type: FitKitTypes.TimeRange.DAYS },
                    type: FitKitTypes.AggregateType.Time
                },
                endTime,
                sampleType: FitKitTypes.Types.Steps,
                startTime
            });

            previousResults = results.map(mapPedometerResults);
        }
    }

    const stepsChannel = yield call(dailyStepsChannel, startOfDay.toISOString());

    while (true) {
        try {
            const results = yield take(stepsChannel);
            yield call(() => Logger.logMixpanelEvent("raw_steps_results_passive", results));
            const { data } = yield call(upsertStepsChallenge, [...previousResults, mapPedometerResults(results)]);

            yield put(updateDailyStepsSuccess(data));
        } catch (e) {
            yield put(updateDailyStepsFailed(e.message));
        } finally {
            if (yield cancelled()) {
                stepsChannel.close();
            }
        }
    }
}

export function* startDailySteps() {
    while (true) {
        yield take(START_DAILY_STEPS);
        const dailyStepsTask = yield fork(listenToDailySteps);
        yield take(STOP_DAILY_STEPS);
        yield cancel(dailyStepsTask);
    }
}

export default [
    startDailySteps()
];
