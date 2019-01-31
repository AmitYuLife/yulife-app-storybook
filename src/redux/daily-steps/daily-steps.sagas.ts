import moment from "moment";
import { PedometerResponse } from "react-native-dual-pedometer";
import RNFitKit, { FitKitTypes } from "react-native-fitkit";
import { Navigation } from "react-native-navigation";
import { delay } from "redux-saga";
import { call, put, select, spawn, takeLatest } from "redux-saga/effects";
import { AddHistoricalSteps_addHistoricalSteps, ChallengePayload } from "../../graphql/_core/schema";
import addHistoricalSteps from "../../graphql/challenges/addHistoricalSteps.gql";
import upsertStepsChallenge from "../../graphql/challenges/upsertStepsChallenge.gql";
import getCurrentUserWithClient from "../../graphql/user/getCurrentUser.gql";
import { MODALS } from "../../navigation/routes";
import Logger from "../../services/logging/logger";
import { pathOr } from "../../services/utils";
import { getRouteState } from "../app/app.selectors";
import {
    PEDOMETER_START,
    PEDOMETER_UPDATES_SUCCESS,
    UpdatePedometerSuccessActionResult
} from "../pedometer/pedometer.actions";
import { GET_HISTORICAL_DATA, updateDailyStepsFailed, updateDailyStepsSuccess } from "./daily-steps.actions";
import { getLastUpdated } from "./daily-steps.selectors";

type HistoricalSteps = AddHistoricalSteps_addHistoricalSteps;

export const mapPedometerResults = (results: PedometerResponse): ChallengePayload => ({
    endDateTime: moment(results.endTime).format(),
    startDateTime: moment(results.startTime).format(),
    value: Math.floor(results.steps)
});

export function* oldDaysUpdate() {
    const lastUpdated = yield select(getLastUpdated);
    // const lastUpdated = moment().subtract(1, "days"); // for tests
    const startOfDay = moment().startOf("day");

    if (moment(lastUpdated).isBefore(startOfDay)) {
        let isUpdated = false;
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

            while (!isUpdated) {
                try {
                    const res = yield call(addHistoricalSteps, results.map(mapPedometerResults), true);
                    const response: HistoricalSteps = pathOr<HistoricalSteps>(res, "data.addHistoricalSteps", {
                        endDateTime: "",
                        startDateTime: "",
                        yucoin: 0
                    });

                    if (response.yucoin > 0) {
                        const route = yield select(getRouteState);
                        if (route !== MODALS.collectReward) {
                            const firstDay = moment(response.startDateTime).format("DD MMM");
                            const lastDay = moment(response.endDateTime).format("DD MMM");
                            const date = firstDay !== lastDay ? `${firstDay} - ${lastDay}` : firstDay;

                            yield call(() => {
                                Navigation.showModal({
                                    component: {
                                        id: MODALS.collectReward,
                                        name: MODALS.collectReward,
                                        passProps: {
                                            date,
                                            onPress: () => Navigation.dismissModal(MODALS.collectReward),
                                            yucoin: response.yucoin
                                        }
                                    }
                                });
                            });
                        }
                    }

                    isUpdated = true;
                } catch (e) {
                    yield spawn(() => Logger.logMixpanelError(e, "daily-steps.sagas.@95"));
                    yield call(delay, 15000);
                }
            }
        }
    }
}

function* dailyStepsUpdate({ payload }: UpdatePedometerSuccessActionResult) {
    try {
        const { data } = yield call(upsertStepsChallenge, [mapPedometerResults(payload)]);

        yield put(updateDailyStepsSuccess(data));
    } catch (e) {
        yield spawn(() => Logger.logMixpanelError(e, "daily-steps.sagas.@108"));
        yield put(updateDailyStepsFailed(e.message));
    }
}

function* getHistoricalData() {
    try {
        const res = yield call(getCurrentUserWithClient);
        const onboardingDate = pathOr<string>(res, "data.getCurrentUser.onboardingDate", "");

        if (onboardingDate && onboardingDate.length === 19) {
            const startTime = moment(onboardingDate)
                .subtract(60, "days")
                .startOf("day")
                .format();
            const endTime = moment(onboardingDate)
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

                if (!!results.length) {
                    yield call(addHistoricalSteps, results.map(mapPedometerResults), false);
                }
            }
        }
    } catch (e) {
        yield spawn(() => Logger.logMixpanelError(e, "daily-steps.sagas.@118"));
        yield spawn(() => Logger.logIntercomEvent("historical_steps_sync_failed", { message: e.message }));
    }
}

export default [
    takeLatest(PEDOMETER_START, oldDaysUpdate),
    takeLatest(PEDOMETER_UPDATES_SUCCESS, dailyStepsUpdate),
    takeLatest(GET_HISTORICAL_DATA, getHistoricalData)
];
