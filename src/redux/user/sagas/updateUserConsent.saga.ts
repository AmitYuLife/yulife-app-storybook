import updateMemberConsentGql from "@graphql/member/updateMemberConsent.gql";
import Logger from "@services/logging/logger";
import { call, put, spawn } from "redux-saga/effects";
import { updateUserConsent, updateUserConsentSuccess } from "../user.actions";

export default function* updateUserConsentSaga({ payload }: ReturnType<typeof updateUserConsent>) {
  try {
    const { data } = yield call(updateMemberConsentGql, payload);
    yield put(updateUserConsentSuccess(data));
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "updateUserConsentSaga" });
    });
  }
}
