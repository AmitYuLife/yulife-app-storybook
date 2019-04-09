import Intercom from "react-native-intercom";
import { call } from "redux-saga/effects";

export default function* unregisterIntercomSaga() {
    yield call(() => Intercom.reset());
}
