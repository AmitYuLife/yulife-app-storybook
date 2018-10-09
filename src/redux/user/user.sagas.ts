import { call, put, spawn, takeLatest } from "redux-saga/effects";
import client from "../../graphql/_core/client";
import updateMemberConsentGql from "../../graphql/member/updateMemberConsent.gql";
import getCurrentUserWithClient from "../../graphql/user/getCurrentUser.gql";
import { setUnauthenticatedRoot } from "../../navigation/root";
import Logger from "../../services/logging/logger";
import { getToken } from "../../services/storage";
import { clearToken } from "../../services/storage/token";
import { persistor } from "../_core/store";
import { CHALLENGE_RESET_SUCCESS } from "../levels/levels.actions";
import {
    FITKIT_CONSENT_AUTHORISED,
    GET_USER_START,
    getUserSuccess,
    LOGIN_USER_SUCCESS,
    LoginUserSuccessAction,
    LOGOUT,
    UPDATE_USER_CONSENT,
    UpdateUserConsentActionResult,
    updateUserConsentSuccess
} from "./user.actions";

function* updateUserConsentSaga({ payload }: UpdateUserConsentActionResult) {
    try {
        const { data } = yield call(updateMemberConsentGql, payload);
        yield put(updateUserConsentSuccess(data));
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

function* fitKitConsentAuthorisedSaga() {
    try {
        const { data } = yield call(updateMemberConsentGql, { mobileHealth: true });
        yield put(updateUserConsentSuccess(data));
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

function* loginUserSuccessSaga({ payload }: LoginUserSuccessAction) {
    const { user, intercomHash } = payload.loginUser;
    yield call(setLoggerIdentity, user.id, intercomHash);
}

function* getUserData() {
    try {
        const token = yield call(getToken);

        if (token) {
            const { data } = yield call(getCurrentUserWithClient);
            yield spawn(setLoggerIdentity, data.getCurrentUser.id, data.getIntercomHash);
            yield put(getUserSuccess(data));
        }
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

function* setLoggerIdentity(userId: string, hash?: string) {
    if (hash) {
        yield call(Logger.setIntercomHash, hash);
    }
    yield call(Logger.setUserId, userId);
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
    takeLatest(CHALLENGE_RESET_SUCCESS, getUserData),
    takeLatest(UPDATE_USER_CONSENT, updateUserConsentSaga),
    takeLatest(LOGOUT, logOut)
];
