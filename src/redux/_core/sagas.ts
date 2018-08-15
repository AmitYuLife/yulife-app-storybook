import { all } from "redux-saga/effects";
import appSagas from "../app/app.sagas";

export default function* allSagas() {
    yield all([
        ...appSagas,
    ]);
}
