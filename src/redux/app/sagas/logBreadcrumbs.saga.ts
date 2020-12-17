import bugsnag from "@services/bugsnag";
import { call } from "redux-saga/effects";
import Logger from "@services/logging/logger";

export default function* logBreadcrumbsSaga(action: any) {
  try {
    if (typeof action.payload === "object" || typeof action.payload === "string") {
      yield call(bugsnag().leaveBreadcrumb, action.type.slice(0, 30), action.payload);
    } else {
      yield call(bugsnag().leaveBreadcrumb, action.type.slice(0, 30));
    }
  } catch (e) {
    Logger.error(e, { file: "logBreadcrumbs.saga" });
  }
}
