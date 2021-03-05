import getSession from "@graphql/user/getSession.gql";
import { getToken } from "@services/storage";
import { call, select } from "redux-saga/effects";
import { getRouteState } from "../app.selectors";
import { ROUTES } from "@navigation/constants";
import { setAuthenticatedRoot } from "@navigation/root";
import { Unpacked } from "@services/utils";

export default function* checkConnectionSaga() {
  const token: Unpacked<typeof getToken> = yield call(getToken);

  if (!token) {
    return;
  }

  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const isCurrentlyOffline = currentRoute === ROUTES.offline;

  if (isCurrentlyOffline) {
    try {
      const response: Unpacked<typeof getSession> = yield call(getSession);
      if (response?.data) {
        yield call(setAuthenticatedRoot);
      }
    } catch (e) {
      // handled
    }
  }
}
