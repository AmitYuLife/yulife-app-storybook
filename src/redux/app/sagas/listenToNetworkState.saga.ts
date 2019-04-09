import { ConnectionInfo, NetInfo } from "react-native";
import { call, put, take } from "redux-saga/effects";
import { updateOfflineState } from "../app.actions";
import { appNetworkChannel } from "../app.channels";

export default function* listenToNetworkStateSaga() {
    const isConnected = yield call(NetInfo.isConnected.fetch);

    yield put(updateOfflineState(!isConnected));

    const networkChannel = yield call(appNetworkChannel);

    while (true) {
        const network: ConnectionInfo = yield take(networkChannel);
        yield put(updateOfflineState(network.type === "none"));
    }
}
