import moment from "moment";
import { PedometerResponse } from "react-native-dual-pedometer";
import { call, cancel, cancelled, fork, put, select, take } from "redux-saga/effects";
import { ChallengePayload } from "../../graphql/_core/schema";
import upsertStepsChallenge from "../../graphql/challenges/upsertStepsChallenge.gql";
import { challengeContinueAction } from "../levels/levels.actions";
import { activeLevelSelector } from "../levels/levels.selectors";
import {
    START_DAILY_STEPS,
    STOP_DAILY_STEPS,
    updateDailyStepsFailed,
    updateDailyStepsSuccess
} from "./daily-steps.actions";
import { dailyStepsChannel } from "./daily-steps.channels";

const mapPedometerResults = (results: PedometerResponse): ChallengePayload => ({
    endDateTime: moment(results.endTime).format(),
    startDateTime: moment(results.startTime).format(),
    value: results.steps
});

export function* listenToDailySteps() {
    const startOfDay = moment()
        .startOf("day")
        .toISOString();
    const stepsChannel = yield call(dailyStepsChannel, startOfDay);

    while (true) {
        try {
            const results = yield take(stepsChannel);
            const { data } = yield call(upsertStepsChallenge, [mapPedometerResults(results)]);

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
        const active = yield select(activeLevelSelector);

        if (active.levelSlotId && !active.timeUp && !active.status) {
            yield put(challengeContinueAction());
        } else {
            const dailyStepsTask = yield fork(listenToDailySteps);
            yield take(STOP_DAILY_STEPS);
            yield cancel(dailyStepsTask);
        }
    }
}

export default [
    startDailySteps()
];
