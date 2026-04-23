import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logger/logger";
import { Unpacked } from "@utils";
import { UPDATE_APP_STATE, updateAppState } from "@redux/app/app.actions";
import { getToken } from "@services/storage";
import { refreshUserProfile, updateUserProfile } from "@redux/user/user.actions";
import client from "@graphql/_core/client";
import { GetUserProfileQuery, gql } from "@graphql/__generated";
import { QueryResult } from "@apollo/client";

export default function* getUserProfileData(
  dataPayload: ReturnType<typeof updateAppState> | ReturnType<typeof refreshUserProfile>
) {
  const { payload, type } = dataPayload ?? {};
  if (type === UPDATE_APP_STATE && payload.appState !== "active") {
    return;
  }

  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const { data: userProfile }: QueryResult<GetUserProfileQuery> = yield call(() =>
      client().query({ query: gql("GetUserProfileDocument"), fetchPolicy: "network-only" })
    );
    if (userProfile?.getUserProfile) {
      yield put(
        updateUserProfile({
          ...userProfile.getUserProfile,
          supportConfig: {
            supportLevel: userProfile.getUserProfile.supportConfig?.supportLevel,
          },
          blackListedNavBarTabs: userProfile.getUserProfile.gameSettings?.blackListedNavBarTabs,
          rewards: userProfile.getUserProfile.gameSettings?.rewards,
          stepsGameSettings: {
            blackListApps: userProfile.getUserProfile.gameSettings.blackListApps.steps,
          },
          cyclingGameSettings: {
            cyclingMeasurement: userProfile.getUserProfile.gameSettings.cyclingMeasurement,
          },
          debugToolsEnabled: userProfile.getUserProfile.gameSettings.debugToolsEnabled,
          debugQueriesToolEnabled: userProfile.getUserProfile.gameSettings.debugQueriesToolEnabled,
          enabledHealthProviders: userProfile.getUserProfile.gameSettings.enabledHealthProviders,
        })
      );
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "getUserProfileData" });
    });
  }
}
