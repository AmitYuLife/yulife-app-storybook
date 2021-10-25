import getTotalCoins from "@graphql/user/getTotalCoins";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { call, put, spawn } from "redux-saga/effects";
import { totalCoinsUpdated } from "../coins.actions";

export default function* updateTotalCoinsSaga() {
  try {
    const { data: coinData }: Unpacked<typeof getTotalCoins> = yield call(getTotalCoins);
    if (coinData) {
      yield put(totalCoinsUpdated(coinData.getTotalCoins));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "updateTotalCoins" });
    });
  }

  return;
}
