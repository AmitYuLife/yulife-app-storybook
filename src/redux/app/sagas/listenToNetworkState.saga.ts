import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { call, put, take, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { updateOfflineState, checkConnection } from "../app.actions";
import { appNetworkChannel } from "../app.channels";

export default function* listenToNetworkStateSaga() {
  const connectionInfo: NetInfoState = yield call(NetInfo.fetch);

  yield put(updateOfflineState(!connectionInfo.isConnected));

  const networkChannel = yield call(appNetworkChannel);

  let networkType = connectionInfo.type;

  while (true) {
    const network: NetInfoState = yield take(networkChannel);

    yield spawn(() => Logger.logMixpanelEvent("app_network_changed", { networkType, network }));

    if (network.type !== networkType) {
      networkType = network.type;
      yield put(checkConnection(true));
    }
  }
}
