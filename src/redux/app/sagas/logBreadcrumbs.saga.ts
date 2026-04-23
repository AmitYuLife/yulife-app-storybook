import Logger from "@services/logger/logger";
import { call } from "redux-saga/effects";
import { SyncAction } from "@redux/_core/types";

export default function* logBreadcrumbsSaga(action: SyncAction) {
  yield call(() => {
    Logger.breadcrumb("Redux action", { type: action.type }, "log");
  });
}
