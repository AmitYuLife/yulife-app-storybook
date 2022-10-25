import { call } from "redux-saga/effects";
import { SyncAction } from "@redux/_core/types";
import Logger from "@services/logging/logger";
import { parseJSON } from "../sdui.helpers";

export function* sduiActionLogEventSaga(action: SyncAction<string>) {
  const { isValid, data } = parseJSON(action.payload, ["name", "props"]);

  if (isValid) {
    yield call(Logger.logMixpanelEvent, data.name, data.props);
  }
}
