import { getUserEndPointsVersion } from "@redux/user/user.selectors";
import Logger from "@services/logger/logger";
import { call, delay, select, spawn, takeLatest } from "redux-saga/effects";
import { UPDATE_USER_PROFILE } from "@redux/user/user.actions";
import { Storage, StorageKey } from "@utils/storage";
import client from "@graphql/_core/client";
import { gql, GetMobileAssetsWithVersionQuery } from "@graphql/__generated";
import { ApolloQueryResult } from "@apollo/client";
import { prefetchImages } from "@atoms";

const BATCH_SIZE = 10;
const PRELOAD_TIMEOUT = 10000; //ms

export function* prefetchAssets() {
  const clientVersion: string = yield call(getAssetVersion);

  const endPoints: ReturnType<typeof getUserEndPointsVersion> = yield select(getUserEndPointsVersion);

  if (clientVersion !== endPoints?.getMobileAssets) {
    try {
      const { data }: ApolloQueryResult<GetMobileAssetsWithVersionQuery> = yield call(() =>
        client().query({
          query: gql(`GetMobileAssetsWithVersionDocument`),
          fetchPolicy: "network-only",
        })
      );

      if (data?.getMobileAssetsWithVersion?.assets) {
        yield call(saveAssetsVersion, data.getMobileAssetsWithVersion.version);

        for (let i = 0; i < data.getMobileAssetsWithVersion.assets.length; i += BATCH_SIZE) {
          const batch = data.getMobileAssetsWithVersion.assets.slice(i, i + BATCH_SIZE);

          yield call(
            prefetchImages,
            batch.map((asset) => asset.uri)
          );

          yield delay(PRELOAD_TIMEOUT);
        }
      }
    } catch (e) {
      yield spawn(() => {
        Logger.notify(e, { event: "prefetchAssets" });
      });
    }
  }
}

const saveAssetsVersion = async (version: string) => {
  return Storage.setItem(StorageKey.mobileAssets, version);
};

const getAssetVersion = async () => {
  return Storage.getItem(StorageKey.mobileAssets);
};

export default [takeLatest(UPDATE_USER_PROFILE, prefetchAssets)];
