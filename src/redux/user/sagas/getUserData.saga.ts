import getCurrentUserWithClient from "@graphql/user/getCurrentUser.gql";
import { getToken } from "@services/storage";
import { pathOr } from "@services/utils";
import { call, put, spawn } from "redux-saga/effects";
import { getUserSuccess, setUserNoAccessAction } from "../user.actions";

import setLoggerIdentity from "./setLoggerIdentity.helper";
import setWootricIdentity from "./setWootricIdentity.helper";

export default function* getUserDataSaga() {
    try {
        const token = yield call(getToken);

        if (token) {
            const { data } = yield call(getCurrentUserWithClient);

            yield spawn(
                setLoggerIdentity,
                data.getCurrentUser.id,
                data.getCurrentUser.membershipType,
                data.getCurrentUser.wootricId,
                data.getIntercomHash
            );

            yield spawn(setWootricIdentity, data.getCurrentUser);

            const isArchived = pathOr<boolean>(data, "getCurrentUser.archived", false);

            if (isArchived) {
                yield put(setUserNoAccessAction());
            } else {
                yield put(getUserSuccess(data));
            }
        }
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}
