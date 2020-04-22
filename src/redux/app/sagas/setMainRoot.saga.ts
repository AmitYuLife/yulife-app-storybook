import handleDeepLink from "@navigation/handleDeepLink";
import { setAuthenticatedRoot, setOfflineRoot, setUnauthenticatedRoot } from "@navigation/root";
import { getToken } from "@services/storage";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { call, put } from "redux-saga/effects";
import { setAuthenticated, setUnauthenticated } from "../app.actions";

interface IMainRootPayload {
  payload: string;
  type: string;
}

export default function* setMainRootSaga({ payload }: IMainRootPayload) {
  const token = yield call(getToken);

  if (token) {
    const connectionInfo: NetInfoState = yield call(() => NetInfo.fetch());

    if (connectionInfo.type === "none") {
      yield call(setOfflineRoot);
    } else {
      yield call(setAuthenticatedRoot);
    }

    yield put(setAuthenticated());
  } else {
    yield call(setUnauthenticatedRoot);
    yield put(setUnauthenticated());
  }

  if (!!payload) {
    yield call(handleDeepLink, payload, token);
  }
}
