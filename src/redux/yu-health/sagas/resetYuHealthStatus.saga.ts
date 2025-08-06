import { put } from "redux-saga/effects";
import { resetYuHealthState } from "../yu-health.actions";

export default function* resetYuHealthStatusSaga() {
  yield put(resetYuHealthState());
}
