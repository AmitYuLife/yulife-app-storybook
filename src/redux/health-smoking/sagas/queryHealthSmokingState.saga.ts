import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logger/logger";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";
import { QueryResult } from "@apollo/client";
import { GetHealthSmokingStateQuery, gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import { updateHealthSmokingStateAction } from "../health-smoking.actions";
import { HealthSmokingState } from "../health-smoking.types";

export function* queryHealthSmokingState() {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const { data }: QueryResult<GetHealthSmokingStateQuery> = yield call(() =>
      client().query({ query: gql("GetHealthSmokingStateDocument"), fetchPolicy: "no-cache" })
    );

    if (data?.getHealthSmokingState) {
      yield put(updateHealthSmokingStateAction(data.getHealthSmokingState as HealthSmokingState));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "queryHealthSmokingState" });
    });
  }
}
