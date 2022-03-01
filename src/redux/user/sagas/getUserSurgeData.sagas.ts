import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { updateUserSurge } from "@redux/user/user.actions";
import getUserSurge from "@graphql/surge/getUserSurge.gql";

export default function* getUserSurgeData() {
  try {
    const { data: userSurge }: Unpacked<typeof getUserSurge> = yield call(getUserSurge);

    yield put(updateUserSurge(userSurge.getUserSurge));
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getUserSurgeData" });
    });
  }

  return;
}
