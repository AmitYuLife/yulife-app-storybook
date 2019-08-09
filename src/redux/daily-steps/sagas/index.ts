import { takeLatest } from "redux-saga/effects";
import { PEDOMETER_START, PEDOMETER_UPDATES_SUCCESS } from "../../pedometer/pedometer.actions";

import sendStepsSinceLastUpdatedSaga from "./sendStepsSinceLastUpdated.saga";
import updateDailyStepsSaga from "./updateDailySteps.saga";

export default [
    takeLatest(PEDOMETER_START, sendStepsSinceLastUpdatedSaga),
    takeLatest(PEDOMETER_UPDATES_SUCCESS, updateDailyStepsSaga)
];
