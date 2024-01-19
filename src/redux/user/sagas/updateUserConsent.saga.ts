import Logger from "@services/logging/logger";
import { call, put, spawn } from "redux-saga/effects";
import { updateUserConsent, updateUserConsentSuccess } from "../user.actions";
import { gql } from "@graphql/__generated";
import client from "@graphql/_core/client";

export default function* updateUserConsentSaga({ payload }: ReturnType<typeof updateUserConsent>) {
  try {
    const { data } = yield call(() =>
      client().mutate({
        mutation: gql("UpdateMemberConsentDocument"),
        variables: { consent: payload },
      })
    );
    yield put(updateUserConsentSuccess(data));
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "updateUserConsentSaga" });
    });
  }
}
