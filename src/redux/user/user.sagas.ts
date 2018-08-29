import { call, put, takeLatest } from "redux-saga/effects";
import updateMemberConsentGql from "../../graphql/member/updateMemberConsent.gql";
import { FITKIT_CONSENT_AUTHORISED, updateUserConsent } from "./user.actions";

export function* fitKitConsentAuthorisedSaga() {
    try {
        const { data } = yield call(updateMemberConsentGql, { mobileHealth: true });
        yield put(updateUserConsent(data));
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

export default [
    takeLatest(FITKIT_CONSENT_AUTHORISED, fitKitConsentAuthorisedSaga)
];
