import { call, select, take } from "redux-saga/effects";
import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";
import Logger from "@services/logger/logger";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { GET_USER_COIN_LEDGER_SUCCESS, getUserCoinLedgerSuccess } from "@redux/user/user.actions";

export function* refetchQuestMapDocumentForCacheUpdate() {
  try {
    yield call(() => client().query({ query: gql("GetQuestMapDocument"), fetchPolicy: "network-only" }));
  } catch (e) {
    yield call(() => {
      Logger.error(e, { event: "resetChallengeSuccess" });
    });
  }
}

export function* refetchQuestMapIfLevelChangedOnColdStart() {
  const previousLevel: number = yield select(getCurrentLevel);
  const action: ReturnType<typeof getUserCoinLedgerSuccess> = yield take(GET_USER_COIN_LEDGER_SUCCESS);
  const nextLevel = action.payload?.level;

  if (nextLevel && nextLevel !== previousLevel) {
    yield call(refetchQuestMapDocumentForCacheUpdate);
  }
}
