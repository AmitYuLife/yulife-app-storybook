import submitUnityChallengeWithClient from "@graphql/challenges/submitUnity.gql";
import getUserSurgeData from "@redux/user/sagas/getUserSurgeData.sagas";
import Logger from "@services/logging/logger";
import { call, put, spawn } from "redux-saga/effects";
import { AppDataType, getUserDataStart } from "../../user/user.actions";
import { submitUnityAction } from "../levels.actions";

export default function* submitUnitySaga({ payload }: ReturnType<typeof submitUnityAction>) {
  try {
    yield call(submitUnityChallengeWithClient, payload.levelId);
    yield call(getUserSurgeData);
    yield put(getUserDataStart([AppDataType.coinLedger]));
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "submitUnity" });
    });
  }
}
