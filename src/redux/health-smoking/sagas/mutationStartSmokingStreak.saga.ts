import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logger/logger";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";
import { QueryResult } from "@apollo/client";
import { StartSmokingStreakMutation, gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import { updateHealthSmokingStateAction } from "../health-smoking.actions";
import { HealthSmokingState } from "../health-smoking.types";

export function* mutationStartSmokingStreak() {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const { data }: QueryResult<StartSmokingStreakMutation> = yield call(() =>
      client().mutate({ mutation: gql("StartSmokingStreakDocument"), fetchPolicy: "no-cache" })
    );

    if (data?.startSmokingStreak) {
      yield put(updateHealthSmokingStateAction(data.startSmokingStreak as HealthSmokingState));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "mutationStartSmokingStreak" });
    });
  }
}
