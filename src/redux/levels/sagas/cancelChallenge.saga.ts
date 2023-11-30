import { Storage, StorageKey } from "@utils/storage";
import { call } from "redux-saga/effects";

export default function* cancelChallengeSaga() {
  yield call(Storage.removeItem, StorageKey.mediaPlayerProgress);
}
