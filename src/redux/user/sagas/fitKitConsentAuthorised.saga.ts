import { call, put } from "redux-saga/effects";
import { updateUserConsentSuccess } from "../user.actions";
import Logger from "@services/logging/logger";
import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";

export default function* fitKitConsentAuthorisedSaga() {
  try {
    const { data } = yield call(() =>
      client().mutate({
        mutation: gql("UpdateMemberConsentDocument"),
        variables: { consent: { mobileHealth: true } },
      })
    );
    yield put(updateUserConsentSuccess(data));
  } catch (e) {
    Logger.error(e, { event: "fitkitConsent" });
  }
}
