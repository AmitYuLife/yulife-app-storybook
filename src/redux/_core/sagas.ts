import { all } from "redux-saga/effects";
import appSagas from "../app/app.sagas";
import dailyStepsSagas from "../daily-steps/daily-steps.sagas";
import loggingSagas from "../logging/logging.sagas";
import userSagas from "../user/user.sagas";

export default function* allSagas() {
    yield all([
        ...appSagas,
        ...dailyStepsSagas,
        ...loggingSagas,
        ...userSagas
    ]);
}
