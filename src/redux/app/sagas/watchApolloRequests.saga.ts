// import getSession from "@graphql/user/getSession.gql";
import { ROUTES } from "@navigation/constants";
import { setAuthenticatedRoot, setOfflineRoot } from "@navigation/root";
import { getToken } from "@services/storage";
import { call, select } from "redux-saga/effects";
import { getRouteState } from "../app.selectors";
import { apolloRequest } from "../app.actions";
import { MAX_OPERATIONS_ATTEMPTS } from "@graphql/_core/retryLink";

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

  const completeFromContext = payload.operation.getContext().completed;
  // First attempt doesn't count in the currentRequestCount as a retry so the max value will be MAX - 1
  const retryHasFinished = payload.currentRequestCount === MAX_OPERATIONS_ATTEMPTS - 1;

  const operationCompleted = completeFromContext || retryHasFinished;

  if (operationCompleted && payload.networkError && !isCurrentlyOffline) {
    yield call(setOfflineRoot);
    return;
  }
}
