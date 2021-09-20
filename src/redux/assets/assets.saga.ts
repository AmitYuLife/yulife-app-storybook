import getMobileAssets from "@graphql/assets/getMobileAssets.gql";
import Logger from "@services/logging/logger";
import FastImage from "react-native-fast-image";
import { call, delay, spawn, takeLatest } from "redux-saga/effects";
import { AUTHENTICATED } from "../app/app.actions";

const BATCH_SIZE = 10;
const PRELOAD_TIMEOUT = 10000; //ms

export function* prefetchAssets() {
  try {
    const { data } = yield call(getMobileAssets);

    if (data && data.getMobileAssets) {
      for (let i = 0; i < data.getMobileAssets.length; i += BATCH_SIZE) {
        FastImage.preload(data.getMobileAssets.slice(i, i + BATCH_SIZE));
        yield delay(PRELOAD_TIMEOUT);
      }
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "prefetchAssets" });
    });
  }
}

export default [takeLatest(AUTHENTICATED, prefetchAssets)];
