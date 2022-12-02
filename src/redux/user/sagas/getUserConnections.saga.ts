import { call, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import getUserConnections from "@graphql/user/getUserConnections.gql";

import { getUserConnectionsSuccess } from "../user.actions";

export default function* getUserConnectionsSaga() {
  try {
    const { data }: Unpacked<typeof getUserConnections> = yield call(getUserConnections);

    if (data?.getUserConnections) {
      yield put(getUserConnectionsSuccess(data.getUserConnections));
    }
  } catch (e) {
    Logger.error(e, { event: "getUserConnections" });
  }
}
