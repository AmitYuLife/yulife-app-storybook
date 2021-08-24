import getMobileAssets from "@graphql/assets/getMobileAssets.gql";
import Logger from "@services/logging/logger";
import FastImage from "react-native-fast-image";
import { call, spawn, takeLatest } from "redux-saga/effects";
import { AUTHENTICATED } from "../app/app.actions";

export function* prefetchAssets() {
  try {
    const { data } = yield call(getMobileAssets);

    if (data && data.getMobileAssets) {
      FastImage.preload(data.getMobileAssets);
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "prefetchAssets" });
    });
  }
}

export default [takeLatest(AUTHENTICATED, prefetchAssets)];
