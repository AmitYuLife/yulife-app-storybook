import { call } from "redux-saga/effects";
import Intercom from "@intercom/intercom-react-native";

export function* sduiActionOpenSupportChatSaga() {
  try {
    yield call(Intercom.displayMessenger);
  } catch (e) {
    // shrug (log)
  }
}
