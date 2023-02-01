import { call, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getUserActiveStreakSuccess } from "../user.actions";
import getUserActiveStreak from "@graphql/user/getUserActiveStreak.gql";

export default function* getUserActiveStreakSaga() {
  try {
    const { data }: Unpacked<typeof getUserActiveStreak> = yield call(getUserActiveStreak);

    if (data?.getUserActiveStreak) {
      yield put(getUserActiveStreakSuccess(data.getUserActiveStreak));
    }
  } catch (e) {
    Logger.error(e, { event: "getUserActiveStreak" });
  }
}
