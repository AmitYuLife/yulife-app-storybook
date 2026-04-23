import getUserSurgeData from "@redux/user/sagas/getUserSurgeData.sagas";
import Logger from "@services/logger/logger";
import { call, put, spawn } from "redux-saga/effects";
import { getUserDataStart } from "../../user/user.actions";
import { AppDataType } from "../../user/user.types";
import { submitUnityAction } from "../levels.actions";
import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";

export default function* submitUnitySaga({ payload }: ReturnType<typeof submitUnityAction>) {
  try {
    yield call(() =>
      client().mutate({
        mutation: gql("SubmitUnityDocument"),
        variables: { levelId: payload.levelId },
        refetchQueries: [{ query: gql("GetQuestMapDocument") }],
      })
    );
    yield call(getUserSurgeData);
    yield put(
      getUserDataStart({
        types: [AppDataType.coinLedger, AppDataType.todayActivity, AppDataType.dailyChallengeAmountAvailable],
      })
    );
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "submitUnity" });
    });
  }
}
