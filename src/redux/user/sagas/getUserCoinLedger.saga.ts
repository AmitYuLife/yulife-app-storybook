import { call, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import getUserCoinLedger from "@graphql/user/getUserCoinLedger.gql";
import { getUserCoinLedgerSuccess } from "../user.actions";

export default function* getUserCoinLedgerSaga() {
  try {
    const { data }: Unpacked<typeof getUserCoinLedger> = yield call(getUserCoinLedger);

    if (data?.getUserCoinLedger) {
      yield put(getUserCoinLedgerSuccess(data.getUserCoinLedger));
    }
  } catch (e) {
    Logger.error(e, { event: "getUserCoinLedger" });
  }
}
