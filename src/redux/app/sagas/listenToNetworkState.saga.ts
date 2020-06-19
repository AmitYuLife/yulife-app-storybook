import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { call, put, take, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { updateOfflineState } from "../app.actions";
import { appNetworkChannel } from "../app.channels";

export default function* listenToNetworkStateSaga() {
  const connectionInfo: NetInfoState = yield call(NetInfo.fetch);

  yield put(updateOfflineState(!connectionInfo.isConnected));

  const networkChannel = yield call(appNetworkChannel);

  while (true) {
    const network: NetInfoState = yield take(networkChannel);

    const networkType = connectionInfo.type;
    yield spawn(() => Logger.logMixpanelEvent("app_network_changed", { networkType, network }));
  }
}
