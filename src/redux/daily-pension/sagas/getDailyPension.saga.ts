import getDailyPensionContribution from "@graphql/user/getDailyPension.gql";
import Logger from "@services/logging/logger";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import { call, put, spawn } from "redux-saga/effects";
import { updateDailyPension } from "../daily-pension.actions";

export default function* getDailyPension() {
  try {
    const token: Unpacked<typeof getToken> = yield call(getToken);
    if (token) {
      const { data }: Unpacked<typeof getDailyPensionContribution> = yield call(getDailyPensionContribution);

      if (data?.getDailyPensionContribution) {
        yield put(updateDailyPension(data.getDailyPensionContribution));
      }
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getDailyPension" });
    });
  }
}
