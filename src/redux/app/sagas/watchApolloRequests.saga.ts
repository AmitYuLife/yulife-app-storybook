// import getSession from "@graphql/user/getSession.gql";
import { ROUTES } from "@navigation/constants";
import { setAuthenticatedRoot, setOfflineRoot } from "@navigation/root";
import { getToken } from "@services/storage";
import { call, select } from "redux-saga/effects";
import { getRouteState } from "../app.selectors";
import { apolloRequest } from "../app.actions";

export default function* watchApolloRequestsSaga({ payload }: ReturnType<typeof apolloRequest>) {
  const token = yield call(getToken);

  if (!token) {
    return;
  }

  const currentRoute = yield select(getRouteState);
  const isCurrentlyOffline = currentRoute === ROUTES.offline;

  if (isCurrentlyOffline && payload.result) {
    yield call(setAuthenticatedRoot);
    return;
  }

  if (payload.networkError && !isCurrentlyOffline) {
    yield call(setOfflineRoot);
    return;
  }
}
