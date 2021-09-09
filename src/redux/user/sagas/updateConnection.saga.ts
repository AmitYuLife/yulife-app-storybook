import { deleteConnectionWithClient, getNewConnectionLinkWithClient } from "@graphql/connections";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { Linking } from "react-native";
import { call, put, spawn } from "redux-saga/effects";

import { updateConnectionFailed, updateConnectionStart, updateConnectionSuccess } from "../user.actions";

export default function* updateConnectionSaga({ payload }: ReturnType<typeof updateConnectionStart>) {
  if (payload.isConnected) {
    // disconnect
    try {
      const result: Unpacked<typeof deleteConnectionWithClient> = yield call(deleteConnectionWithClient, payload.name);

      if (result && result.data && result.data.deleteConnection) {
        yield put(updateConnectionSuccess({ ...payload, isConnected: false }));
      } else {
        yield put(updateConnectionFailed(payload));
      }
    } catch (e) {
      yield put(updateConnectionFailed(payload));
      yield spawn(() => {
        Logger.error(e, { event: "updateConnectionSaga_onDisconnect" });
      });
    }
  } else {
    // connect
    try {
      const result: Unpacked<typeof getNewConnectionLinkWithClient> = yield call(
        getNewConnectionLinkWithClient,
        payload.name
      );

      if (result && result.data && result.data.getNewConnectionLink) {
        yield call(() => Linking.openURL(result.data.getNewConnectionLink));
      } else {
        yield put(updateConnectionFailed(payload));
      }
    } catch (e) {
      yield put(updateConnectionFailed(payload));
      yield spawn(() => {
        Logger.error(e, { event: "updateConnectionSaga_onConnect" });
      });
    }
  }
}
