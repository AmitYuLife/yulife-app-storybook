import { call, put, takeEvery, select } from "redux-saga/effects";
import {
  FETCH_AVATAR,
  saveAvatarToCache,
  invalidateUserAvatarCache,
  IFetchAvatarPayload,
} from "./avatar-cache.actions";
import { SyncAction } from "@app/redux/_core/types";
import { isInFlightSelector } from "./avatar-cache.selectors";

function* fetchAvatarSaga({ payload: { uri } }: SyncAction<IFetchAvatarPayload>) {
  try {
    // ignore inflight requests
    const inFlight = yield select(isInFlightSelector, uri);
    if (inFlight) {
      return;
    }

    // mark it as pending to prevent multiple fetched
    yield put(saveAvatarToCache({ xml: null, uri }));

    const result: Response = yield call(() => fetch(uri));
    const xml: string = yield call(() => result.text());
    yield put(saveAvatarToCache({ xml, uri }));
  } catch (e) {
    // clear cache for a retry next time
    yield put(invalidateUserAvatarCache({ uri }));
  }
}

export default [takeEvery(FETCH_AVATAR, fetchAvatarSaga)];
