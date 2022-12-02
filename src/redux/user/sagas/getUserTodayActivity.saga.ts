import { call, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getUserTodayActivitySuccess } from "../user.actions";
import getUserTodayActivity from "@graphql/user/getUserTodayActivity.gql";

export default function* getUserTodayActivitySaga() {
  try {
    const { data }: Unpacked<typeof getUserTodayActivity> = yield call(getUserTodayActivity);

    if (data?.getUserTodayActivity) {
      yield put(getUserTodayActivitySuccess(data.getUserTodayActivity));
    }
  } catch (e) {
    Logger.error(e, { event: "getUserTodayActivity" });
  }
}
