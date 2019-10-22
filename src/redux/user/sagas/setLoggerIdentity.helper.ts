import Logger from "@services/logging/logger";
import DeviceInfo from "react-native-device-info";
import { call } from "redux-saga/effects";

export default function* setLoggerIdentity(userId: string, membershipType: string, wootricId: string, hash?: string) {
    if (hash) {
        yield call(Logger.setIntercomHash, hash);
    }
    yield call(Logger.setUserId, userId);
    yield call(Logger.setUserProperties, { app_version: DeviceInfo.getVersion(), membershipType, wootricId }, true);
}
