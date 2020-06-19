import getSession from "@graphql/user/getSession.gql";
import { getToken } from "@services/storage";
import { call } from "redux-saga/effects";

export default function* checkConnectionSaga() {
  const token = yield call(getToken);

  if (!token) {
    return;
  }
  try {
      yield call(getSession);
  } catch (e) {
      // this is handled
  }
}
