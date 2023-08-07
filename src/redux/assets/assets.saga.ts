import getMobileAssets from "@graphql/assets/getMobileAssets.gql";
import { getUserEndPointsVersion } from "@redux/user/user.selectors";
import Logger from "@services/logging/logger";
import FastImage from "react-native-fast-image";
import { call, delay, select, spawn, takeLatest } from "redux-saga/effects";
import { UPDATE_USER_PROFILE } from "@redux/user/user.actions";
import { Unpacked } from "@utils";
import { Storage, StorageKey } from "@utils/storage";

const BATCH_SIZE = 10;
const PRELOAD_TIMEOUT = 10000; //ms

export function* prefetchAssets() {
  const clientVersion: string = yield call(getAssetVersion);
  const endPoints: ReturnType<typeof getUserEndPointsVersion> = yield select(getUserEndPointsVersion);
  yield call(FastImage.enableDiskCaching);
  if (clientVersion !== endPoints?.getMobileAssets) {
    try {
      const { data }: Unpacked<typeof getMobileAssets> = yield call(getMobileAssets);
      if (data && data.getMobileAssetsWithVersion?.assets) {
        yield call(saveAssetsVersion, data?.getMobileAssetsWithVersion?.version);
        for (let i = 0; i < data.getMobileAssetsWithVersion.assets.length; i += BATCH_SIZE) {
          FastImage.preload(data.getMobileAssetsWithVersion.assets.slice(i, i + BATCH_SIZE));
          yield delay(PRELOAD_TIMEOUT);
        }
      }
    } catch (e) {
      yield spawn(() => {
        Logger.error(e, { event: "prefetchAssets" });
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
