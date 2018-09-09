import { call, put, takeLatest } from "redux-saga/effects";
import updateMemberConsentGql from "../../graphql/member/updateMemberConsent.gql";
import Logger from "../../services/logging/logger";
import {
    FITKIT_CONSENT_AUTHORISED,
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

export default [
    takeLatest(LOGIN_USER_SUCCESS, loginUserSuccessSaga),
    takeLatest(FITKIT_CONSENT_AUTHORISED, fitKitConsentAuthorisedSaga)
];
