import { takeLatest } from "redux-saga/effects";
import { AUTHENTICATED } from "../../app/app.actions";
import { PEDOMETER_UPDATES_SUCCESS } from "../../pedometer/pedometer.actions";

import sendStepsSinceLastUpdatedSaga from "./sendStepsSinceLastUpdated.saga";
import updateDailyStepsSaga from "./updateDailySteps.saga";

export default [
    takeLatest(AUTHENTICATED, sendStepsSinceLastUpdatedSaga),
    takeLatest(PEDOMETER_UPDATES_SUCCESS, updateDailyStepsSaga)
];
