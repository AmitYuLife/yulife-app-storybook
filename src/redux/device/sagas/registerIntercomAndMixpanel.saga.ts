import Intercom from "react-native-intercom";
import Mixpanel from "react-native-mixpanel";
import { spawn } from "redux-saga/effects";
import { addDeviceToken } from "../device.actions";

export default function* registerIntercomAndMixpanelSaga({ payload }: ReturnType<typeof addDeviceToken>) {
    yield spawn(() => Intercom.sendTokenToIntercom(payload.deviceToken));
    yield spawn(() => Mixpanel.addPushDeviceToken(payload.deviceToken));
}
