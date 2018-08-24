import { all } from "redux-saga/effects";
import appSagas from "../app/app.sagas";
import dailyStepsSagas from "../daily-steps/daily-steps.sagas";
import loggingSagas from "../logging/logging.sagas";

export default function* allSagas() {
    yield all([
        ...appSagas,
        ...dailyStepsSagas,
        ...loggingSagas
    ]);
}
