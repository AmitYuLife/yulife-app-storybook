import Logger from "@services/logging/logger";
import { call, put, spawn } from "redux-saga/effects";
import { fetchGame2048HighScore as fetchGame2048HighScoreAction, updateGame2048HighScore } from "../game-2048.actions";
import client from "@graphql/_core/client";
import { GetGame2048HighScoreQuery, gql } from "@graphql/__generated";
import { QueryResult } from "@apollo/client";

export default function* fetchGame2048HighScore({ payload }: ReturnType<typeof fetchGame2048HighScoreAction>) {
  try {
    const { data: highScoreData }: QueryResult<GetGame2048HighScoreQuery> = yield call(() =>
      client().query({
        fetchPolicy: "network-only",
        query: gql("GetGame2048HighScoreDocument"),
        variables: { input: payload },
      })
    );

    const { highScore } = highScoreData?.getGame2048HighScore || {};

    yield put(updateGame2048HighScore(highScore ?? 0));
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "fetchGame2048HighScore" });
    });
  }

  return;
}
