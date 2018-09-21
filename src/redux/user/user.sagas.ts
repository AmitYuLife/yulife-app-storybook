import { call, put, takeLatest } from "redux-saga/effects";
import updateMemberConsentGql from "../../graphql/member/updateMemberConsent.gql";
import getCurrentUserWithClient from "../../graphql/user/getCurrentUser.gql";
import Logger from "../../services/logging/logger";
import { getToken } from "../../services/storage";
import {
    FITKIT_CONSENT_AUTHORISED,
    GET_USER_START,
    getUserSuccess,
    LOGIN_USER_SUCCESS,
    LoginUserSuccessAction,
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

export default [
    takeLatest("INIT", getUserData),
    takeLatest(GET_USER_START, getUserData),
    takeLatest(LOGIN_USER_SUCCESS, loginUserSuccessSaga),
    takeLatest(FITKIT_CONSENT_AUTHORISED, fitKitConsentAuthorisedSaga)
];
