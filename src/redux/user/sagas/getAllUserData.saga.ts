import { call, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";
import getAllUserData from "@graphql/user/getAllUserData.gql";
import { getUserCoinLedgerTodayActivitySuccess } from "../user.actions";

export default function* getAllUserDataSaga() {
  try {
    const token: Unpacked<typeof getToken> = yield call(getToken);
    if (token) {
      const { data }: Unpacked<typeof getAllUserData> = yield call(getAllUserData);

      if (data) {
        // TODO: add more data to store once further queries are moved from getCurrentUser
        yield put(
          getUserCoinLedgerTodayActivitySuccess({
            todayActivity: data?.todayActivity,
            coinLedger: data?.coinLedger,
          })
        );
      }
    }
  } catch (e) {
    Logger.error(e, { event: "getAllUserDataSaga" });
  }
}
