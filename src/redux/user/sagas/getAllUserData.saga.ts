import { call, put, select } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";
import getAllUserData from "@graphql/user/getAllUserData.gql";
import {
  getUserPassiveChallengesEarnRateSuccess,
  getUserActiveChallengeSuccess,
  getUserActiveStreakSuccess,
  getUserTodayActivitySuccess,
  getUserCoinLedgerSuccess,
  getUserFeaturesSuccess,
  getUserConnectionsSuccess,
} from "../user.actions";
import { AppDataType, IAppDataTypePayload, GetUserFeaturesPayload, GetUserConnectionsPayload } from "../user.types";
import { Action } from "@reduxjs/toolkit";
import { updateDailyPensionSuccess } from "@redux/daily-pension/daily-pension.actions";
import { updateHintsSuccess } from "@redux/hints/hints.actions";
import { updateSocialGroupLeaderboardsSuccess } from "@redux/leaderboards/leaderboards.actions";
import {
  GetActiveChallengeSuccessDataPayload,
  GetDailyChallengeAmountAvailablePayload,
} from "@redux/levels/levels.types";
import { IStreaksGetUserSuccessPayload } from "@redux/streaks/streaks.types";
import { IGetTodayActivitiesPayload, IGetCoinLedgerSuccessPayload } from "@redux/coins/coins.types";
import { IPassiveChallengesEarnRateSuccessPayload } from "../user.types";
import { DailyPension } from "@redux/daily-pension/daily-pension.types";
import { IGetHintsSuccessPayload } from "@redux/hints/hints.types";
import { IGetSocialGroupsSuccessPayload } from "@redux/leaderboards/leaderboards.types";
import { toUserDataReduxType } from "./getAllUserData.helper";
import { getDailyChallengeAmountAvailableActionSuccess } from "@redux/levels/levels.actions";
import { getInventoryInfoSuccess } from "@redux/quest-map/quest-map.actions";
import { GetInventoryInfoSuccessPayload } from "@redux/quest-map/quest-map.types";
import { getUserFeatures } from "../user.selectors";

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
  | GetInventoryInfoSuccessPayload;

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
};

export default function* getAllUserDataSaga({
  payload,
}: { payload: IAppDataTypePayload | AppDataType[] } & Action<AppDataType>) {
  try {
    const token: Unpacked<typeof getToken> = yield call(getToken);
    if (token) {
      const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
      const types = Array.isArray(payload) ? payload : payload.types;
      const overrideQueryName = Array.isArray(payload) ? undefined : payload.overrideQueryName;

      const { data }: Unpacked<typeof getAllUserData> = yield call(getAllUserData, { types, overrideQueryName });

      if (data) {
        for (const type of types) {
          if (SUCCESS_ACTIONS[type]) {
            yield put(
              SUCCESS_ACTIONS[type](
                toUserDataReduxType(type, data[type], features.tempGameGetInAppMeditationFromServer)
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
