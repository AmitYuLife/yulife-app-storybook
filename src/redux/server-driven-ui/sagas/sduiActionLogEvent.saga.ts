import { call } from "redux-saga/effects";
import { SyncAction } from "@redux/_core/types";
import EngagementTracking from "@services/logging/engagement-tracking";
import { parseJSON } from "@utils";

export function* sduiActionLogEventSaga(action: SyncAction<string>) {
  const { isValid, data } = parseJSON(action.payload, ["name", "props"]);

  if (isValid) {
    yield call(EngagementTracking.logMixpanelEvent, data.name, data.props);
  }
}
