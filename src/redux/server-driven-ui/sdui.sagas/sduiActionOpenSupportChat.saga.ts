import { IntercomClient } from "@services/logging/intercom";
import { call } from "redux-saga/effects";

export function* sduiActionOpenSupportChatSaga() {
  try {
    yield call(IntercomClient.displayMessenger);
  } catch (e) {
    // shrug (log)
  }
}
