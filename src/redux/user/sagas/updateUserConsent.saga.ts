import Logger from "@services/logger/logger";
import { call, spawn } from "redux-saga/effects";
import { updateUserConsent } from "../user.actions";
import { gql } from "@graphql/__generated";
import client from "@graphql/_core/client";

export default function* updateUserConsentSaga({ payload }: ReturnType<typeof updateUserConsent>) {
  try {
    yield call(() =>
      client().mutate({
        mutation: gql("UpdateMemberConsentDocument"),
        variables: { consent: payload },
      })
    );
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "updateUserConsentSaga" });
    });
  }
}
