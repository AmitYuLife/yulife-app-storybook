import getCurrentUserWithClient from "@graphql/user/getCurrentUser.gql";
import { expireSession } from "@navigation/root";
import { getToken } from "@services/storage";
import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getUserSuccess, setUserNoAccessAction } from "../user.actions";
import setLoggerIdentity from "./setLoggerIdentity.helper";
import { updateDailyPensionSuccess } from "@redux/daily-pension/daily-pension.actions";
import { updateHintsSuccess } from "@redux/hints/hints.actions";
import { updateSocialGroupLeaderboardsSuccess } from "@redux/leaderboards/leaderboards.actions";

// TODO: Purge when getAllUserData is live
export default function* getUserDataSaga() {
  try {
    const token: Unpacked<typeof getToken> = yield call(getToken);

    if (token) {
      const { data, errors }: Unpacked<typeof getCurrentUserWithClient> = yield call(getCurrentUserWithClient);
      if (data && data.getCurrentUser === null && !errors) {
        yield call(expireSession);
        return;
      }

      yield spawn(setLoggerIdentity, data.getCurrentUser.id, data.getIntercomHash);

      const isArchived = data?.getCurrentUser?.archived ?? false;

      if (isArchived) {
        yield put(setUserNoAccessAction());
      } else {
        yield put(getUserSuccess(data));

        if (data?.getDailyPensionContribution) {
          yield put(updateDailyPensionSuccess(data.getDailyPensionContribution));
        }

        if (data?.getMobileHints) {
          yield put(updateHintsSuccess(data.getMobileHints));
        }

        if (data?.getMobileSocialGroupLeaderboards) {
          yield put(updateSocialGroupLeaderboardsSuccess(data.getMobileSocialGroupLeaderboards));
        }
      }
    }
  } catch (e) {
    Logger.error(e, { event: "getUserData" });
  }
}
