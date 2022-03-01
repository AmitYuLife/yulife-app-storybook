import getMobileCopy from "@graphql/copy/getMobileCopy.gql";
import AsyncStorage from "@react-native-community/async-storage";
import { getUserEndPointsVersion } from "@redux/user/user.selectors";
import Logger from "@services/logging/logger";
import { call, put, select, spawn } from "redux-saga/effects";
import { updateCopy } from "../copy.actions";

const STORAGE_KEY = "@YuStore:mobileCopy";

export default function* updateCopySaga() {
  const clientVersion: string = yield call(getAssetVersion);
  const endPoints: ReturnType<typeof getUserEndPointsVersion> = yield select(getUserEndPointsVersion);

  if (clientVersion !== endPoints?.getMobileCopy) {
    try {
      const { data } = yield call(getMobileCopy);

      if (data && data.getMobileCopy) {
        yield put(updateCopy(data));
        yield call(saveAssetsVersion, data?.getMobileCopy?.version);
      }
    } catch (e) {
      yield spawn(() => {
        Logger.error(e, { event: "updateCopySaga" });
      });
    }
  }
}

const saveAssetsVersion = async (version: string) => {
  return AsyncStorage.setItem(STORAGE_KEY, version);
};

const getAssetVersion = async () => {
  return AsyncStorage.getItem(STORAGE_KEY);
};
