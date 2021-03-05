import getCurrentUserWithClient from "@graphql/user/getCurrentUser.gql";
import { expireSession } from "@navigation/root";
import { getToken } from "@services/storage";
import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@services/utils";
import { getUserSuccess, setUserNoAccessAction } from "../user.actions";
import setLoggerIdentity from "./setLoggerIdentity.helper";

export default function* getUserDataSaga() {
  try {
    const token: Unpacked<typeof getToken> = yield call(getToken);

    if (token) {
      const { data, errors }: Unpacked<typeof getCurrentUserWithClient> = yield call(getCurrentUserWithClient);
      if (data && data.getCurrentUser === null && !errors) {
        yield call(expireSession);
        return;
      }

      yield spawn(setLoggerIdentity, data.getCurrentUser.id, data.getCurrentUser.membershipType, data.getIntercomHash);

      const isArchived = data?.getCurrentUser?.archived ?? false;

      if (isArchived) {
        yield put(setUserNoAccessAction());
      } else {
        yield put(getUserSuccess(data));
      }
    }
  } catch (e) {
    Logger.error(e, { event: "getUserData" });
  }
}
