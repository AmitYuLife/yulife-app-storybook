import { call, put, takeLatest } from "redux-saga/effects";
import client from "../../graphql/_core/client";
import updateMemberConsentGql from "../../graphql/member/updateMemberConsent.gql";
import getCurrentUserWithClient from "../../graphql/user/getCurrentUser.gql";
import { setUnauthenticatedRoot } from "../../navigation/root";
import Logger from "../../services/logging/logger";
import { getToken } from "../../services/storage";
import { clearToken } from "../../services/storage/token";
import { persistor } from "../_core/store";
import {
    FITKIT_CONSENT_AUTHORISED,
    GET_USER_START,
    getUserSuccess,
    LOGIN_USER_SUCCESS,
    LoginUserSuccessAction,
    LOGOUT,
    updateUserConsent
} from "./user.actions";

export function* fitKitConsentAuthorisedSaga() {
    try {
        const { data } = yield call(updateMemberConsentGql, { mobileHealth: true });
        yield put(updateUserConsent(data));
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

function* loginUserSuccessSaga({ payload }: LoginUserSuccessAction) {
    const { user } = payload.loginUser;

    yield call(Logger.setUserId, user.id);
}

export function* getUserData() {
    try {
        const token = yield call(getToken);

        if (token) {
            const { data } = yield call(getCurrentUserWithClient);

            yield put(getUserSuccess(data));
        }
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

function* logOut() {
    yield call(clearToken);
    yield call(setUnauthenticatedRoot);
    yield call(() => client.resetStore());
    yield call(() => persistor.purge());
}

export default [
    takeLatest("INIT", getUserData),
    takeLatest(GET_USER_START, getUserData),
    takeLatest(LOGIN_USER_SUCCESS, loginUserSuccessSaga),
    takeLatest(FITKIT_CONSENT_AUTHORISED, fitKitConsentAuthorisedSaga),
    takeLatest(LOGOUT, logOut)
];
