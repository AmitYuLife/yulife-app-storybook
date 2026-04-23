import Logger from "@services/logger/logger";
import { call, put, spawn } from "redux-saga/effects";
import { totalCoinsUpdated } from "../coins.actions";
import client from "@graphql/_core/client";
import { GetTotalCoinsQuery, gql } from "@graphql/__generated";
import { QueryResult } from "@apollo/client";

export default function* updateTotalCoinsSaga() {
  try {
    const { data: coinData }: QueryResult<GetTotalCoinsQuery> = yield call(() =>
      client().query({
        fetchPolicy: "network-only",
        query: gql("GetTotalCoinsDocument"),
      })
    );

    if (coinData) {
      yield put(totalCoinsUpdated(coinData.getTotalCoins));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "updateTotalCoins" });
    });
  }

  return;
}
