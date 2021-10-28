import Intercom from "@intercom/intercom-react-native";
import { call } from "redux-saga/effects";

export default function* unregisterIntercomSaga() {
  yield call(() => Intercom.logout());
}
