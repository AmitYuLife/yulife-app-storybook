import { call } from "redux-saga/effects";
import Logger from "@services/logging/logger";
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
    Logger.error(e, { event: "fitkitConsent" });
  }
}
