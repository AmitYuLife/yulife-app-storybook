import Logger from "@services/logging/logger";
import { call, spawn, select, put } from "redux-saga/effects";
import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";
import { getGame2048HighScore } from "../game-2048.selectors";
import { completeGame2048 as completeGame2048Action, updateGame2048HighScore } from "../game-2048.actions";

export default function* completeGame2048Saga({ payload }: ReturnType<typeof completeGame2048Action>) {
  try {
    yield call(() =>
      client().mutate({
        fetchPolicy: "network-only",
        mutation: gql("CompleteGame2048Document"),
        variables: { input: payload },
      })
    );

    const currentHighScore: ReturnType<typeof getGame2048HighScore> = yield select(getGame2048HighScore);
    const highScore = payload.score;

    if (highScore > currentHighScore) {
      yield put(updateGame2048HighScore(highScore));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "completeGame2048" });
    });
  }

  return;
}
