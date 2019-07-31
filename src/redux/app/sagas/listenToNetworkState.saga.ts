import { ConnectionInfo, NetInfo } from "react-native";
import { call, put, take } from "redux-saga/effects";
import { updateOfflineState } from "../app.actions";
import { appNetworkChannel } from "../app.channels";
import checkConnectionSaga from "./checkConnection.saga";

export default function* listenToNetworkStateSaga() {
    const isConnected = yield call(NetInfo.isConnected.fetch);

    yield put(updateOfflineState(!isConnected));

    const networkChannel = yield call(appNetworkChannel);
    const connectionInfo = yield call(() => NetInfo.getConnectionInfo());

    let networkType = connectionInfo.type;

    while (true) {
        const network: ConnectionInfo = yield take(networkChannel);

        if (network.type !== networkType) {
            networkType = network.type;
            yield call(checkConnectionSaga);
        }
    }
}
