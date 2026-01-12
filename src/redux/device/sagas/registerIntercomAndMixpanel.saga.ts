import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
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
          deviceId: Device.modelId ?? "",
          subscribed: true,
        },
      })
    );
  } catch (e) {
    Logger.error(e, { event: "registerDevice" });
  }
}

function* checkForPermissionsAndSendToIntercom(deviceToken: string) {
  const permission: Notifications.NotificationPermissionsStatus = yield call(Notifications.getPermissionsAsync);

  if (permission?.status === "granted") {
    yield spawn(() => Logger.sendTokenToIntercom(deviceToken));
  }
}

export default function* registerIntercomAndMixpanelSaga({ payload }: ReturnType<typeof addDeviceToken>) {
  yield spawn(checkForPermissionsAndSendToIntercom, payload.deviceToken);
  yield spawn(registerDeviceOnYuServer, payload.deviceToken);
}
