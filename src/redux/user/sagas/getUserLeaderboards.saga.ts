import { call, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getUserLeaderboardsSuccess } from "../user.actions";
import getUserLeaderboards from "@graphql/user/getUserLeaderboards.gql";

export default function* getUserLeaderboardsSaga() {
  try {
    const { data }: Unpacked<typeof getUserLeaderboards> = yield call(getUserLeaderboards);

    if (data?.getUserLeaderboards) {
      yield put(getUserLeaderboardsSuccess(data.getUserLeaderboards));
    }
  } catch (e) {
    Logger.error(e, { event: "getUserLeaderboards" });
  }
}
