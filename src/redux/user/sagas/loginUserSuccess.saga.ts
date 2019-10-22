import { call } from "redux-saga/effects";
import { loginUserSuccess } from "../user.actions";

import setLoggerIdentity from "./setLoggerIdentity.helper";
import setWootricIdentity from "./setWootricIdentity.helper";

export default function* loginUserSuccessSaga({ payload }: ReturnType<typeof loginUserSuccess>) {
    const { user, intercomHash } = payload.loginUser;
    yield call(setLoggerIdentity, user.id, user.membershipType, user.wootricId, intercomHash);
    yield call(setWootricIdentity, user);
}
