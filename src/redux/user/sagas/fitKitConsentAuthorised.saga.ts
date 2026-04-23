import { call } from "redux-saga/effects";
import Logger from "@services/logger/logger";
import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";

export default function* fitKitConsentAuthorisedSaga() {
  try {
    yield call(() =>
      client().mutate({
        mutation: gql("UpdateMemberConsentDocument"),
        variables: { consent: { mobileHealth: true } },
      })
    );
  } catch (e) {
    Logger.notify(e, { event: "fitkitConsent" });
  }
}
