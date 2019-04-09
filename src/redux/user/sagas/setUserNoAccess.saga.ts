import { ROUTES } from "@navigation/constants";
import { setNoAccessRoot } from "@navigation/root";
import { call, put, select } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";
import { stopPedometerUpdates } from "../../pedometer/pedometer.actions";

export default function* setUserNoAccessSaga() {
    yield put(stopPedometerUpdates());
    const route = yield select(getRouteState);

    if (route !== ROUTES.noAccess) {
        yield call(setNoAccessRoot);
    }
}
