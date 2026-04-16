import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";
import getAllUserData from "@graphql/user/getAllUserData.gql";
import { expireSession } from "@navigation/root";
import setLoggerIdentity from "./setLoggerIdentity.helper";
import {
  getUserPassiveChallengesEarnRateSuccess,
  getUserActiveChallengeSuccess,
  getUserActiveStreakSuccess,
  getUserTodayActivitySuccess,
  getUserCoinLedgerSuccess,
  getUserFeaturesSuccess,
  getUserConnectionsSuccess,
  getUserSuccess,
  setUserNoAccessAction,
} from "../user.actions";
import { AppDataType, IAppDataTypePayload, GetUserFeaturesPayload, GetUserConnectionsPayload } from "../user.types";
import { Action } from "@reduxjs/toolkit";
import { updateDailyPensionSuccess } from "@redux/daily-pension/daily-pension.actions";
import { updateHintsSuccess } from "@redux/hints/hints.actions";
import { updateSocialGroupLeaderboardsSuccess } from "@redux/leaderboards/leaderboards.actions";
import {
  GetActiveChallengeSuccessDataPayload,
  GetChallengesDoneTodayPayload,
  GetDailyChallengeAmountAvailablePayload,
} from "@redux/levels/levels.types";
import { IStreaksGetUserSuccessPayload } from "@redux/streaks/streaks.types";
import { IGetTodayActivitiesPayload, IGetCoinLedgerSuccessPayload } from "@redux/coins/coins.types";
import { IPassiveChallengesEarnRateSuccessPayload } from "../user.types";
import { DailyPension } from "@redux/daily-pension/daily-pension.types";
import { IGetHintsSuccessPayload } from "@redux/hints/hints.types";
import { IGetSocialGroupsSuccessPayload } from "@redux/leaderboards/leaderboards.types";
import { toCurrentUser, toUserDataReduxType } from "./getAllUserData.helper";
import {
  getChallengesDoneTodayActionSuccess,
  getDailyChallengeAmountAvailableActionSuccess,
} from "@redux/levels/levels.actions";
import { getInventoryInfoSuccess } from "@redux/quest-map/quest-map.actions";
import { GetInventoryInfoSuccessPayload } from "@redux/quest-map/quest-map.types";
import moment from "moment";

type SuccessActionsDataTypes =
  | GetActiveChallengeSuccessDataPayload
  | IStreaksGetUserSuccessPayload
  | IGetCoinLedgerSuccessPayload
  | IGetTodayActivitiesPayload
  | IPassiveChallengesEarnRateSuccessPayload
  | DailyPension
  | IGetHintsSuccessPayload
  | IGetSocialGroupsSuccessPayload
  | GetUserFeaturesPayload
  | GetUserConnectionsPayload
  | GetDailyChallengeAmountAvailablePayload
  | GetInventoryInfoSuccessPayload
  | GetChallengesDoneTodayPayload;

const SUCCESS_ACTIONS: Record<AppDataType, (data: SuccessActionsDataTypes) => Action> = {
  [AppDataType.activeChallenge]: getUserActiveChallengeSuccess,
  [AppDataType.activeStreak]: getUserActiveStreakSuccess,
  [AppDataType.coinLedger]: getUserCoinLedgerSuccess,
  [AppDataType.todayActivity]: getUserTodayActivitySuccess,
  [AppDataType.passiveChallengesEarnRate]: getUserPassiveChallengesEarnRateSuccess,
  [AppDataType.dailyPension]: updateDailyPensionSuccess,
  [AppDataType.hints]: updateHintsSuccess,
  [AppDataType.socialGroups]: updateSocialGroupLeaderboardsSuccess,
  [AppDataType.features]: getUserFeaturesSuccess,
  [AppDataType.connections]: getUserConnectionsSuccess,
  [AppDataType.dailyChallengeAmountAvailable]: getDailyChallengeAmountAvailableActionSuccess,
  [AppDataType.inventoryInfo]: getInventoryInfoSuccess,
  [AppDataType.challengesDoneToday]: getChallengesDoneTodayActionSuccess,
  [AppDataType.todayScreen]: null, // no-op, as we're relying on the Apollo cache (i.e. this is not stored in redux)
  [AppDataType.currentUser]: null, // handled separately (archived / null-user branching + logger identity spawn)
};

export default function* getAllUserDataSaga({
  payload,
}: { payload: IAppDataTypePayload | AppDataType[] } & Action<AppDataType>) {
  try {
    const token: Unpacked<typeof getToken> = yield call(getToken);
    if (token) {
      const types = Array.isArray(payload) ? payload : payload.types;
      const overrideQueryName = Array.isArray(payload) ? undefined : payload.overrideQueryName;
      const refreshLoggerIdentity = Array.isArray(payload) ? false : !!payload.refreshLoggerIdentity;

      const requestTimestamp = moment().format();
      const { data }: Unpacked<typeof getAllUserData> = yield call(getAllUserData, {
        types,
        overrideQueryName,
        refreshLoggerIdentity,
      });

      if (data) {
        if (types.includes(AppDataType.currentUser)) {
          const currentUser = data[AppDataType.currentUser];

          if (currentUser === null) {
            yield call(expireSession);
            return;
          }

          if (refreshLoggerIdentity) {
            yield spawn(setLoggerIdentity, currentUser.id, data.intercomHash, currentUser.supportConfig?.supportLevel);
          }

          if (currentUser.archived) {
            yield put(setUserNoAccessAction());
          } else {
            yield put(getUserSuccess(toCurrentUser(currentUser)));
          }
        }

        for (const type of types) {
          if (SUCCESS_ACTIONS[type]) {
            yield put(
              SUCCESS_ACTIONS[type](
                toUserDataReduxType({
                  type,
                  data: data[type],
                  requestTimestamp,
                })
              )
            );
          }
        }
      }
    }
  } catch (e) {
    Logger.error(e, { event: "getAllUserDataSaga", payload: JSON.stringify(payload) });
  }
}
