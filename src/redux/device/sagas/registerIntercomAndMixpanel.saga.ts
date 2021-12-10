import addDeviceTokenWithClient from "@graphql/device/addDeviceToken.gql";
import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import Intercom from "@intercom/intercom-react-native";
import { call, spawn } from "redux-saga/effects";
import { addDeviceToken } from "../device.actions";
import Logger from "@services/logging/logger";

function* registerDeviceOnYuServer(deviceToken: string) {
  try {
    yield call<any>(addDeviceTokenWithClient, {
      deviceToken,
      os: Platform.OS,
      deviceId: DeviceInfo.getDeviceId(),
      subscribed: true,
    });
  } catch (e) {
    Logger.error(e, { event: "registerDevice" });
  }
}

export default function* registerIntercomAndMixpanelSaga({ payload }: ReturnType<typeof addDeviceToken>) {
  yield spawn(() => Intercom.sendTokenToIntercom(payload.deviceToken));
  yield spawn(registerDeviceOnYuServer, payload.deviceToken);
}
