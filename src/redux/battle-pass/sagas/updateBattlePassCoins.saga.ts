import { totalCoinsUpdated } from "@redux/coins/coins.actions";
import Logger from "@services/logger/logger";
import { spawn } from "redux-saga/effects";
import client from "@graphql/_core/client";
import {
  MobileGameBattlePassProgressInfo,
  MobileGameBattlePassProgressInfoFragmentDoc,
} from "@graphql/__generated/graphql";
import { getUserCoinLedgerSuccess } from "@redux/user/user.actions";

export default function* updateBattlePassCoinsSaga(
  dataPayload: ReturnType<typeof totalCoinsUpdated> | ReturnType<typeof getUserCoinLedgerSuccess>
) {
  try {
    let coinledgerBalance = 0;
    if (dataPayload.type === "GET_USER_COIN_LEDGER_SUCCESS") {
      coinledgerBalance = dataPayload.payload.total;
    } else if (dataPayload.type === "UPDATE_TOTAL_COINS") {
      coinledgerBalance = dataPayload.payload;
    } else {
      return;
    }

    const apolloClient = client();
    Object.entries(apolloClient.cache.extract())
      .filter(([key]) => key.startsWith(`MobileGameBattlePassProgressInfo:`))
      .forEach(([key, value]) => {
        apolloClient.cache.writeFragment({
          id: key,
          fragment: MobileGameBattlePassProgressInfoFragmentDoc,
          data: {
            ...(value as unknown as MobileGameBattlePassProgressInfo),
            currentBalance: coinledgerBalance,
          },
        });
      });
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "updateBattlePassCoins" });
    });
  }
}
