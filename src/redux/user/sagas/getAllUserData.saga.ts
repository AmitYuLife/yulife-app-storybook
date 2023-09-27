import { call, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";
import getAllUserData, { GetAllUserDataResponse } from "@graphql/user/getAllUserData.gql";
import {
  getUserLeaderboardsSuccess,
  getUserPassiveChallengesEarnRateSuccess,
  getUserActiveChallengeSuccess,
  getUserActiveStreakSuccess,
  AppDataType,
  getUserTodayActivitySuccess,
  getUserCoinLedgerSuccess,
} from "../user.actions";
import { Action } from "redux";
import { updateDailyPensionSuccess } from "@redux/daily-pension/daily-pension.actions";
import { updateHintsSuccess } from "@redux/hints/hints.actions";
import { updateSocialGroupLeaderboardsSuccess } from "@redux/leaderboards/leaderboards.actions";

const SUCCESS_ACTIONS: Record<AppDataType, (data: GetAllUserDataResponse[AppDataType]) => Action> = {
  [AppDataType.activeChallenge]: getUserActiveChallengeSuccess,
  [AppDataType.activeStreak]: getUserActiveStreakSuccess,
  [AppDataType.coinLedger]: getUserCoinLedgerSuccess,
  [AppDataType.todayActivity]: getUserTodayActivitySuccess,
  [AppDataType.leaderboards]: getUserLeaderboardsSuccess,
  [AppDataType.passiveChallengesEarnRate]: getUserPassiveChallengesEarnRateSuccess,
  [AppDataType.dailyPension]: updateDailyPensionSuccess,
  [AppDataType.hints]: updateHintsSuccess,
  [AppDataType.socialGroups]: updateSocialGroupLeaderboardsSuccess,
};

export default function* getAllUserDataSaga({ payload }: { payload: AppDataType[] } & Action<AppDataType>) {
  try {
    const token: Unpacked<typeof getToken> = yield call(getToken);
    if (token) {
      const { data }: Unpacked<typeof getAllUserData> = yield call(getAllUserData, payload);
      if (data) {
        for (const type of payload) {
          if (SUCCESS_ACTIONS[type]) {
            yield put(SUCCESS_ACTIONS[type](data[type]));
          }
        }
      }
    }
  } catch (e) {
    Logger.error(e, { event: "getAllUserDataSaga", payload: payload.join(",") });
  }
}
