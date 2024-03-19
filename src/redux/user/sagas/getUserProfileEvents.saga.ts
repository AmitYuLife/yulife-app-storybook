import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { updateUserProfileEvents } from "@redux/user/user.actions";
import client from "@graphql/_core/client";
import { GetUserProfileEventsQuery, gql } from "@graphql/__generated";
import { QueryResult } from "@apollo/client";

export default function* getUserProfileEventsData() {
  try {
    const { data }: QueryResult<GetUserProfileEventsQuery> = yield call(() =>
      client().query({ query: gql("GetUserProfileEventsDocument"), fetchPolicy: "network-only" })
    );

    if (data?.getUserProfileEvents) {
      yield put(updateUserProfileEvents(data?.getUserProfileEvents));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getUserProfileEventsData" });
    });
  }
}
