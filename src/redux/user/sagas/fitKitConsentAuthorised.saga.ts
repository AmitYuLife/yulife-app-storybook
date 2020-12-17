import updateMemberConsentGql from "@graphql/member/updateMemberConsent.gql";
import { call, put } from "redux-saga/effects";
import { updateUserConsentSuccess } from "../user.actions";
import Logger from "@services/logging/logger";

export default function* fitKitConsentAuthorisedSaga() {
  try {
    const { data } = yield call(updateMemberConsentGql, { mobileHealth: true });
    yield put(updateUserConsentSuccess(data));
  } catch (e) {
    Logger.error(e, { event: "fitkitConsent" });
  }
}
