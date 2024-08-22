import bugsnag from "@services/bugsnag";
import { call } from "redux-saga/effects";
import { SyncAction } from "@redux/_core/types";

export default function* logBreadcrumbsSaga(action: SyncAction) {
  yield call(() => {
    bugsnag().leaveBreadcrumb("Redux action", { type: action.type }, "log");
  });
}
