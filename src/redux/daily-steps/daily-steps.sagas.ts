import moment from "moment";
import { PedometerResponse } from "react-native-dual-pedometer";
import { call, cancel, cancelled, fork, put, take } from "redux-saga/effects";
import { ActionPayload } from "../../graphql/_core/schema";
import addDailyStepsGql from "../../graphql/member/addDailySteps.gql";
import {
    START_DAILY_STEPS,
    STOP_DAILY_STEPS,
    updateDailyStepsFailed,
    updateDailyStepsSuccess
} from "./daily-steps.actions";
import { dailyStepsChannel } from "./daily-steps.channels";

// TODO this will change (or be removed) with the new Challenges API
const mapPedometerResults = (results: PedometerResponse): ActionPayload => ({
    endTime: moment(results.endTime).unix(),
    startTime: moment(results.startTime).unix(),
    value: results.steps
});

export function* listenToDailySteps() {
    const startOfDay = moment().startOf("day").toISOString();
    const stepsChannel = yield call(dailyStepsChannel, startOfDay);

    while (true) {
        try {
            const results = yield take(stepsChannel);
            const { data } = yield call(addDailyStepsGql, [mapPedometerResults(results)]);
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
