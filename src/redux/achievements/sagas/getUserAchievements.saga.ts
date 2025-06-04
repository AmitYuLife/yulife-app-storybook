import { call, spawn } from "redux-saga/effects";
import { gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import Logger from "@services/logging/logger";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";

export default function* getUserAchievementsSaga() {
  const token: Unpacked<typeof getToken> = yield call(getToken);

  if (!token) {
    return;
  }

  try {
    yield call(() =>
      client().query({ query: gql("GetMobileGameUserAchievementsDocument"), fetchPolicy: "network-only" })
    );
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getUserAchievementsSaga" });
    });
  }
}
