import { MutationResult } from "@apollo/client";
import client from "@graphql/_core/client";
import { DeleteConnectionMutation, GetNewConnectionLinkMutation, gql } from "@graphql/__generated";
import Logger from "@services/logger/logger";
import { Linking } from "react-native";
import { call, put, spawn } from "redux-saga/effects";

import { updateConnectionFailed, updateConnectionStart, updateConnectionSuccess } from "../user.actions";

export default function* updateConnectionSaga({ payload }: ReturnType<typeof updateConnectionStart>) {
  if (payload.isConnected) {
    // disconnect
    try {
      const result: MutationResult<DeleteConnectionMutation> = yield call(() =>
        client().mutate({
          mutation: gql("DeleteConnectionDocument"),
          variables: { name: payload.name },
        })
      );

      if (result?.data?.deleteConnection) {
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
      const result: MutationResult<GetNewConnectionLinkMutation> = yield call(() =>
        client().mutate({
          mutation: gql("GetNewConnectionLinkDocument"),
          variables: { name: payload.name },
        })
      );

      if (result?.data?.getNewConnectionLink) {
        const link = result.data.getNewConnectionLink;
        yield call(() => Linking.openURL(link));
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
