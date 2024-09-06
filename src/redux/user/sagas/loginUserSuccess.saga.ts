import { call } from "redux-saga/effects";
import { loginUserSuccess } from "../user.actions";

import setLoggerIdentity from "./setLoggerIdentity.helper";

export default function* loginUserSuccessSaga({ payload }: ReturnType<typeof loginUserSuccess>) {
  const { user, intercomHash } = payload;

  yield call(setLoggerIdentity, user.id, intercomHash, user?.supportConfig?.supportLevel);
}
