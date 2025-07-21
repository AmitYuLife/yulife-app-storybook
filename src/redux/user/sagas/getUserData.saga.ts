import { expireSession } from "@navigation/root";
import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { getUserSuccess, setUserNoAccessAction } from "../user.actions";
import setLoggerIdentity from "./setLoggerIdentity.helper";
import { updateDailyPensionSuccess } from "@redux/daily-pension/daily-pension.actions";
import { IGetUserSuccessPayload } from "../user.types";
import client from "@graphql/_core/client";
import { GetCurrentUserQuery, IntercomHashMethod, gql } from "@graphql/__generated";
import { Platform } from "react-native";
import { FetchResult } from "@apollo/client";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";

// TODO: Purge when getAllUserData is live
export default function* getUserDataSaga() {
  try {
    const token: Unpacked<typeof getToken> = yield call(getToken);
    if (!token) {
      return;
    }

    const { data, errors }: FetchResult<GetCurrentUserQuery> = yield call(() =>
      client().query({
        fetchPolicy: "no-cache",
        query: gql("GetCurrentUserDocument"),
        variables: {
          intercomHashMethod: Platform.OS as IntercomHashMethod,
        },
      })
    );

    if (data && data.getCurrentUser === null && !errors) {
      yield call(expireSession);
      return;
    }

    yield spawn(
      setLoggerIdentity,
      data.getCurrentUser.id,
      data.getIntercomHash,
      data.getCurrentUser.supportConfig?.supportLevel
    );

    const isArchived = data?.getCurrentUser?.archived ?? false;

    if (isArchived) {
      yield put(setUserNoAccessAction());
    } else {
      yield put(getUserSuccess(toGetUserSuccessPayload(data)));

      if (data?.getDailyPensionContribution) {
        yield put(
          updateDailyPensionSuccess({
            active: data?.getDailyPensionContribution?.active,
            contribution: data?.getDailyPensionContribution?.contribution,
            yuCoinAwarded: data?.getDailyPensionContribution?.yuCoinAwarded,
          })
        );
      }
    }
  } catch (e) {
    Logger.error(e, { event: "getUserData" });
  }
}

const toGetUserSuccessPayload = (data: GetCurrentUserQuery): IGetUserSuccessPayload => ({
  onboarding: { redeemedOnboarding: data?.getCurrentUser?.redeemedOnboarding },
  passiveSteps: {
    exchangeRate: {
      yucoin: data?.getCurrentUser?.passiveSteps?.exchange?.yucoin,
      steps: data?.getCurrentUser?.passiveSteps?.exchange?.steps,
      meditation: data?.getCurrentUser?.passiveSteps?.exchange?.meditation,
      surge: data?.getCurrentUser?.passiveSteps?.exchange?.surge,
    },
  },
  user: {
    id: data?.getCurrentUser?.id,
    firstName: data?.getCurrentUser?.firstName,
    lastName: data?.getCurrentUser?.lastName,
    fullName: data?.getCurrentUser?.fullName,
    userFeatures: (data?.getCurrentUser?.userFeatures || []).map(({ name, value }) => ({ name, value })),
    supportConfig: {
      supportLevel: data?.getCurrentUser?.supportConfig?.supportLevel,
    },
  },
});
