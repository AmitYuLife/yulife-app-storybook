import { expireSession } from "@navigation/root";
import { getToken } from "@services/storage";
import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked, toYuHealthReduxType } from "@utils";
import { getUserSuccess, setUserNoAccessAction } from "../user.actions";
import setLoggerIdentity from "./setLoggerIdentity.helper";
import { updateDailyPensionSuccess } from "@redux/daily-pension/daily-pension.actions";
import { IGetUserSuccessPayload } from "../user.types";
import { toChallengeSourceType } from "./getAllUserData.helper";
import client from "@graphql/_core/client";
import { GetCurrentUserQuery, IntercomHashMethod, gql } from "@graphql/__generated";
import { Platform } from "react-native";
import { FetchResult } from "@apollo/client";

// TODO: Purge when getAllUserData is live
export default function* getUserDataSaga() {
  try {
    const token: Unpacked<typeof getToken> = yield call(getToken);

    if (token) {
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

      yield spawn(setLoggerIdentity, data.getCurrentUser.id, data.getIntercomHash);

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
    }
  } catch (e) {
    Logger.error(e, { event: "getUserData" });
  }
}

const toGetUserSuccessPayload = (data: GetCurrentUserQuery): IGetUserSuccessPayload => ({
  todayActivity: data?.getCurrentUser?.todayActivity,
  onboarding: { redeemedOnboarding: data?.getCurrentUser?.redeemedOnboarding },
  passiveSteps: {
    exchangeRate: {
      yucoin: data?.getCurrentUser?.passiveSteps?.exchange?.yucoin,
      steps: data?.getCurrentUser?.passiveSteps?.exchange?.steps,
      meditation: data?.getCurrentUser?.passiveSteps?.exchange?.meditation,
      surge: data?.getCurrentUser?.passiveSteps?.exchange?.surge,
    },
  },
  passiveMeditation: {
    exchangeRate: {
      yucoin: data?.getCurrentUser?.passiveMeditation?.exchange?.yucoin,
      steps: data?.getCurrentUser?.passiveMeditation?.exchange?.steps,
      meditation: data?.getCurrentUser?.passiveMeditation?.exchange?.meditation,
      surge: data?.getCurrentUser?.passiveMeditation?.exchange?.surge,
    },
  },
  user: {
    id: data?.getCurrentUser?.id,
    firstName: data?.getCurrentUser?.firstName,
    lastName: data?.getCurrentUser?.lastName,
    fullName: data?.getCurrentUser?.fullName,
    connections: data?.getCurrentUser?.connections,
    userFeatures: (data?.getCurrentUser?.userFeatures || []).map(({ name, value }) => ({ name, value })),
  },
  levels: {
    activeChallenge: {
      id: data?.getCurrentUser?.activeChallenge?.challenge?.id,
      shouldEndOnLastGoalAchieved: data?.getCurrentUser?.activeChallenge?.levelSlot?.shouldEndOnLastGoalAchieved,
      fitKitTypes: data?.getCurrentUser?.activeChallenge?.levelSlot?.fitKitTypes,
      endDateTime: data?.getCurrentUser?.activeChallenge?.challenge?.endDateTime,
      levelSlotId: data?.getCurrentUser?.activeChallenge?.challenge?.levelSlotId,
      milestones: data?.getCurrentUser?.activeChallenge?.levelSlot?.milestones,
      rating: data?.getCurrentUser?.activeChallenge?.challenge?.rating,
      startDateTime: data?.getCurrentUser?.activeChallenge?.challenge?.startDateTime,
      subtype: data?.getCurrentUser?.activeChallenge?.levelSlot?.subtype,
      unit: data?.getCurrentUser?.activeChallenge?.levelSlot?.unit,
      level: data?.getCurrentUser?.activeChallenge?.challenge?.level,
      levelSlotTemplateId: data?.getCurrentUser?.activeChallenge?.challenge?.levelSlotTemplateId,
      challengeIsActive: !!data?.getCurrentUser?.activeChallenge?.challenge?.id,
      yuHealth: toYuHealthReduxType(data.getCurrentUser?.activeChallenge?.levelSlot?.yuHealth),
      createdBySource: toChallengeSourceType(data?.getCurrentUser?.activeChallenge?.challenge?.createdBySource),
    },
    challengesDoneToday: data?.getCurrentUser?.challengesDoneToday,
    dailyChallengeAmountAvailable: data?.getCurrentUser?.dailyChallengeAmountAvailable,
  },
});
