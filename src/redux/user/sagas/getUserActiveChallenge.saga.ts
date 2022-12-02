import { call, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import getUserActiveChallenge from "@graphql/user/getUserActiveChallenge.gql";
import { getUserActiveChallengeSuccess } from "../user.actions";

export default function* getUserActiveChallengeSaga() {
  try {
    const { data }: Unpacked<typeof getUserActiveChallenge> = yield call(getUserActiveChallenge);

    if (data?.getUserActiveChallenge) {
      yield put(getUserActiveChallengeSuccess(data.getUserActiveChallenge));
    }
  } catch (e) {
    Logger.error(e, { event: "getUserActiveChallenge" });
  }
}
