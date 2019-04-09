import { takeLatest } from "redux-saga/effects";
import { PEDOMETER_START, PEDOMETER_UPDATES_SUCCESS } from "../../pedometer/pedometer.actions";
import { GET_HISTORICAL_DATA } from "../daily-steps.actions";

import getHistoricalDataSaga from "./getHistoricalData.saga";
import sendStepsSinceLastUpdatedSaga from "./sendStepsSinceLastUpdated.saga";
import updateDailyStepsSaga from "./updateDailySteps.saga";

export default [
    takeLatest(PEDOMETER_START, sendStepsSinceLastUpdatedSaga),
    takeLatest(PEDOMETER_UPDATES_SUCCESS, updateDailyStepsSaga),
    takeLatest(GET_HISTORICAL_DATA, getHistoricalDataSaga)
];
