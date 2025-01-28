import { clearApolloCache } from "@graphql/_core/clearCache";
import { clearToken } from "@services/storage/token";
import { call } from "redux-saga/effects";

export default function* resetApolloSaga() {
  yield call(clearApolloCache, { shouldStop: true });
  yield call(clearToken);
}
