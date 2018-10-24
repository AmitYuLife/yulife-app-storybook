import moment from "moment";
import Pedometer from "react-native-dual-pedometer";
import { call, cancel, cancelled, fork, put, race, select, spawn, take } from "redux-saga/effects";
import Logger from "../../services/logging/logger";
import { getToken } from "../../services/storage";
import { UPDATE_APP_STATE } from "../app/app.actions";
import { START_DAILY_STEPS } from "../daily-steps/daily-steps.actions";
import { isUserArchivedSelector } from "../user/user.selectors";
import {
    PEDOMETER_STOP,
    startPedometerUpdates,
    updatePedometerStartAction,
    updatePedometerSuccessAction
} from "./pedometer.actions";
import { stepsChannel } from "./pedometer.channels";
import { stepsSelector } from "./pedometer.selectors";

function* listenToSteps() {
    const momentStartDay = moment().startOf("day");
    const startOfDay = momentStartDay.format();
    const channel = yield call(stepsChannel, startOfDay);

    yield put(updatePedometerStartAction());
    const firstQuery = yield call(Pedometer.queryPedometerFromDate, startOfDay, moment().format());
    yield put(updatePedometerSuccessAction(firstQuery));

    while (true) {
        try {
            const results = yield take(channel);
            const currentSteps = yield select(stepsSelector);
            // console.log("PEDOMETER RESULTS: ", results, currentSteps);

            if (results.steps !== currentSteps) {
                yield put(updatePedometerStartAction());
                yield spawn(() => Logger.logMixpanelEvent("raw_steps_results_passive", results));
                yield put(updatePedometerSuccessAction(results));
            }
        } catch (e) {
            // console.log(e);
        } finally {
            if (yield cancelled()) {
                channel.close();
            }
        }
    }
}

// TODO: restart the pedometer when a new day ticks over
function* startPedometer() {
    while (true) {
        const { appStart, appUpdated, dailySteps } = yield race({
            appStart: take("persist/REHYDRATE"),
            appUpdated: take(UPDATE_APP_STATE),
            dailySteps: take(START_DAILY_STEPS)
        });
        const token = yield call(getToken);
        const isArchived = yield select(isUserArchivedSelector);

        if (token && !isArchived && (dailySteps || appStart || (appUpdated && appUpdated.payload === "active"))) {
            yield put(startPedometerUpdates());
            const stepsTask = yield fork(listenToSteps);
            yield race({
                appUpdated: take(UPDATE_APP_STATE),
                dailySteps: take(PEDOMETER_STOP)
            });
            yield cancel(stepsTask);
        }
    }
}

export default [startPedometer()];
