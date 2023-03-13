import Logger from "@services/logging/logger";
import { call } from "redux-saga/effects";
import { loginUserSuccess } from "../user.actions";

import setLoggerIdentity from "./setLoggerIdentity.helper";

export default function* loginUserSuccessSaga({ payload }: ReturnType<typeof loginUserSuccess>) {
  const { user, intercomHash } = payload.loginUser;

  // this needs to be called before setLoggerIdentity which calls setUserProperties
  yield call(Logger.setIntercomUser, user.id, intercomHash);
  yield call(setLoggerIdentity, user.id, user.membershipType);
}
