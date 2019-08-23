import addDeviceTokenWithClient from "@graphql/device/addDeviceToken.gql";
import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import Intercom from "react-native-intercom";
import Mixpanel from "react-native-mixpanel";
import { call, spawn } from "redux-saga/effects";
import { addDeviceToken } from "../device.actions";

function* registerDeviceOnYuServer(deviceToken: string) {
    try {
        yield call(addDeviceTokenWithClient, {
            deviceToken,
            os: Platform.OS,
            deviceId: DeviceInfo.getDeviceId(),
            subscribed: true
        });
    } catch (e) {
        // log?
    }
}

export default function* registerIntercomAndMixpanelSaga({ payload }: ReturnType<typeof addDeviceToken>) {
    yield spawn(() => Intercom.sendTokenToIntercom(payload.deviceToken));
    yield spawn(() => Mixpanel.addPushDeviceToken(payload.deviceToken));
    yield spawn(registerDeviceOnYuServer, payload.deviceToken);
}
