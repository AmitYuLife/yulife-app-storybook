import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { call, put, take } from "redux-saga/effects";
import { updateOfflineState } from "../app.actions";
import { appNetworkChannel } from "../app.channels";
import checkConnectionSaga from "./checkConnection.saga";

export default function* listenToNetworkStateSaga() {
    const connectionInfo: NetInfoState = yield call(NetInfo.fetch);

    yield put(updateOfflineState(!connectionInfo.isConnected));

    const networkChannel = yield call(appNetworkChannel);

    let networkType = connectionInfo.type;

    while (true) {
        const network: NetInfoState = yield take(networkChannel);

        if (network.type !== networkType) {
            networkType = network.type;
            yield call(checkConnectionSaga);
        }
    }
}
