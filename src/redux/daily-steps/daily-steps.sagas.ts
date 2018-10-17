import moment from "moment";
import { PedometerResponse } from "react-native-dual-pedometer";
import RNFitKit, { FitKitTypes } from "react-native-fitkit";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { ChallengePayload } from "../../graphql/_core/schema";
import upsertStepsChallenge from "../../graphql/challenges/upsertStepsChallenge.gql";
import { PEDOMETER_START, PEDOMETER_UPDATE, UpdatePedometerActionResult } from "../pedometer/pedometer.actions";
import { updateDailyStepsFailed, updateDailyStepsSuccess } from "./daily-steps.actions";
import { getLastUpdated } from "./daily-steps.selectors";

const mapPedometerResults = (results: PedometerResponse): ChallengePayload => ({
    endDateTime: moment(results.endTime).format(),
    startDateTime: moment(results.startTime).format(),
    value: Math.floor(results.steps)
});

export function* oldDaysUpdate() {
    const lastUpdated = yield select(getLastUpdated);
    // const lastUpdated = moment().subtract(2, "days"); // for tests
    const startOfDay = moment().startOf("day");

    if (moment(lastUpdated).isBefore(startOfDay)) {
        // get steps from start of last updated date until the end of previous day
        const startTime = moment(lastUpdated)
            .startOf("day")
            .format();
        const endTime = moment()
            .subtract(1, "days")
            .endOf("day")
            .format();

        const authorised = yield call(RNFitKit.authorise, {
            read: [FitKitTypes.Types.Steps]
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

            yield call(upsertStepsChallenge, results.map(mapPedometerResults));
            // TODO: show modal collect yucoin
        }
    }
}

function* dailyStepsUpdate({ payload }: UpdatePedometerActionResult) {
    try {
        const { data } = yield call(upsertStepsChallenge, [mapPedometerResults(payload)]);

        yield put(updateDailyStepsSuccess(data));
    } catch (e) {
        yield put(updateDailyStepsFailed(e.message));
    }
}

export default [takeLatest(PEDOMETER_START, oldDaysUpdate), takeLatest(PEDOMETER_UPDATE, dailyStepsUpdate)];
