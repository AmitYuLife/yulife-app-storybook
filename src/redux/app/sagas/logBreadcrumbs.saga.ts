import bugsnag from "@services/bugsnag";
import { call } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { SyncAction } from "@redux/_core/types";

const BREADCRUMB_MAX_LENGTH = 30;

export default function* logBreadcrumbsSaga(action: SyncAction) {
  try {
    if (typeof action.payload === "object" || typeof action.payload === "string") {
      yield call(bugsnag().leaveBreadcrumb, action.type.slice(0, BREADCRUMB_MAX_LENGTH), action.payload);
    } else {
      yield call(bugsnag().leaveBreadcrumb, action.type.slice(0, BREADCRUMB_MAX_LENGTH));
    }
  } catch (e) {
    Logger.error(e, { file: "logBreadcrumbs.saga" });
  }
}
