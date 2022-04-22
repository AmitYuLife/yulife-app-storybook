import getUserProfileEvents from "@graphql/user/getUserProfileEvents.gql";
import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { updateUserProfileEvents } from "@redux/user/user.actions";

export default function* getUserProfileEventsData() {
  try {
    const { data }: Unpacked<typeof getUserProfileEvents> = yield call(getUserProfileEvents);
    if (data?.getUserProfileEvents) {
      yield put(updateUserProfileEvents(data?.getUserProfileEvents));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getUserProfileEventsData" });
    });
  }
}
