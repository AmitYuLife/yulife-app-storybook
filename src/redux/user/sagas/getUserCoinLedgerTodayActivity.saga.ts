import { call, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import getUserCoinLedgerTodayActivity from "@graphql/user/getUserCoinLedgerTodayActivity.gql";
import { getUserCoinLedgerTodayActivitySuccess } from "../user.actions";

export default function* getUserCoinLedgerTodayActivitySaga() {
  try {
    const { data }: Unpacked<typeof getUserCoinLedgerTodayActivity> = yield call(getUserCoinLedgerTodayActivity);

    if (data) {
      yield put(getUserCoinLedgerTodayActivitySuccess(data));
    }
  } catch (e) {
    Logger.error(e, { event: "getUserCoinLedgerTodayActivity" });
  }
}
