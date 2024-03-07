import { put } from "redux-saga/effects";
import { setYuHealthStatus } from "../yu-health.actions";
import { YuHealthStatus } from "../yu-health.types";

export default function* resetYuHealthStatusSaga() {
  yield put(setYuHealthStatus(YuHealthStatus.loading));
}
