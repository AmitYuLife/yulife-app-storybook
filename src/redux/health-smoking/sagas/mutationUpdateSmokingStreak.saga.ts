import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";
import { QueryResult } from "@apollo/client";
import { UpdateSmokingStreakMutation, gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import { updateHealthSmokingStateAction } from "../health-smoking.actions";
import { HealthSmokingState } from "../health-smoking.types";
import { updateSmokingStreak } from "../health-smoking.actions";
import { refreshUserProfileEvents } from "@redux/user/user.actions";
import { refreshTotalCoins } from "@redux/coins/coins.actions";

// Not used at the moment, so any updates on this should happen on other gql("UpdateSmokingStreakDocument") calls
export function* mutationUpdateSmokingStreak({ payload }: ReturnType<typeof updateSmokingStreak>) {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const { data }: QueryResult<UpdateSmokingStreakMutation> = yield call(() =>
      client().mutate({ mutation: gql("UpdateSmokingStreakDocument"), variables: payload, fetchPolicy: "no-cache" })
    );

    if (data?.updateSmokingStreak) {
      yield put(updateHealthSmokingStateAction(data.updateSmokingStreak as HealthSmokingState));
      yield put(refreshUserProfileEvents());
      yield put(refreshTotalCoins());
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "mutationUpdateSmokingStreak" });
    });
  }
}
