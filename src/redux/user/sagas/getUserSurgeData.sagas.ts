import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logger/logger";
import { updateUserSurge } from "@redux/user/user.actions";
import client from "@graphql/_core/client";
import { GetUserSurgeQuery, gql } from "@graphql/__generated";
import { QueryResult } from "@apollo/client";

export default function* getUserSurgeData() {
  try {
    const { data: userSurge }: QueryResult<GetUserSurgeQuery> = yield call(() =>
      client().query({ query: gql("GetUserSurgeDocument"), fetchPolicy: "network-only" })
    );

    yield put(updateUserSurge(userSurge.getUserSurge));
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "getUserSurgeData" });
    });
  }

  return;
}
