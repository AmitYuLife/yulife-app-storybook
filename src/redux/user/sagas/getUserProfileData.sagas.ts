import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import { getToken } from "@services/storage";
import { updateUserProfile } from "@redux/user/user.actions";
import client from "@graphql/_core/client";
import { GetUserProfileQuery, gql } from "@graphql/__generated";
import { QueryResult } from "@apollo/client";

interface Params {
  payload?: string;
  type?: string;
}

export default function* getUserProfileData({ payload: appState, type }: Params = {}) {
  if (type === UPDATE_APP_STATE && appState !== "active") {
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
          ...userProfile?.getUserProfile,
          blackListedNavBarTabs: userProfile.getUserProfile?.gameSettings?.blackListedNavBarTabs,
          stepsGameSettings: {
            maxStepsAnomalyWindowMs: userProfile.getUserProfile?.gameSettings.maxStepsAnomalyWindowMs,
            blackListApps: userProfile.getUserProfile?.gameSettings.blackListApps.steps,
          },
        })
      );
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getUserProfileData" });
    });
  }
}
