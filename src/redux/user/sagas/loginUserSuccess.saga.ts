import { call, spawn } from "redux-saga/effects";
import { loginUserSuccess } from "../user.actions";

import setLoggerIdentity from "./setLoggerIdentity.helper";
import setTestFairyId from "./setTestFairyId.helper";

export default function* loginUserSuccessSaga({ payload }: ReturnType<typeof loginUserSuccess>) {
    const { user, intercomHash } = payload.loginUser;
    yield spawn(setTestFairyId, user.id);
    yield call(setLoggerIdentity, user.id, user.membershipType, intercomHash);
}
