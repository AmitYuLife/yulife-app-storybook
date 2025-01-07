import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { call, spawn } from "redux-saga/effects";
import { addDeviceToken } from "../device.actions";
import Logger from "@services/logging/logger";
import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";

function* registerDeviceOnYuServer(deviceToken: string) {
  try {
    yield call(() =>
      client().mutate({
        mutation: gql("AddDeviceTokenDocument"),
        variables: {
          deviceToken,
          os: Platform.OS,
          deviceId: DeviceInfo.getDeviceId(),
          subscribed: true,
        },
      })
    );
  } catch (e) {
    Logger.error(e, { event: "registerDevice" });
  }
}

export default function* registerIntercomAndMixpanelSaga({ payload }: ReturnType<typeof addDeviceToken>) {
  yield spawn(registerDeviceOnYuServer, payload.deviceToken);
}
