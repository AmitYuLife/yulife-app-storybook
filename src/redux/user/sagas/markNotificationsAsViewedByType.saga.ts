import Logger from "@services/logging/logger";
import { call, spawn } from "redux-saga/effects";
import client from "@graphql/_core/client";
import { MobileTabs, gql } from "@graphql/__generated";

type Params = {
  type: string;
  payload: {
    type: MobileTabs;
  };
};

export default function* markNotificationsAsViewedByTypeSaga({ payload: { type } }: Params) {
  try {
    yield call(() =>
      client().mutate({
        mutation: gql("MarkMobileNotificationsAsViewedByTypeDocument"),
        variables: {
          type,
        },
        errorPolicy: "ignore",
      })
    );
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "markNotificationsAsViewedByTypeSaga" });
    });
  }
}
