import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { call, put } from "redux-saga/effects";
import { updateOfflineState } from "../app.actions";

export default function* listenToNetworkStateSaga() {
  const connectionInfo: NetInfoState = yield call(NetInfo.fetch);

  yield put(updateOfflineState(!connectionInfo.isConnected));
}
