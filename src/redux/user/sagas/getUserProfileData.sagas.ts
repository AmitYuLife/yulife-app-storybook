import getUserProfile from "@graphql/user/getUserProfile.gql";
import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import { getToken } from "@services/storage";
import { updateUserProfile } from "@redux/user/user.actions";

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
    const { data: userProfile }: Unpacked<typeof getUserProfile> = yield call(getUserProfile);
    if (userProfile?.getUserProfile) {
      yield put(
        updateUserProfile({
          ...userProfile?.getUserProfile,
          stepsGameSettings: {
            maxStepsAnomalyWindowMs: userProfile?.getUserProfile?.gameSettings.maxStepsAnomalyWindowMs,
            blackListApps: userProfile?.getUserProfile?.gameSettings.blackListApps.steps,
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
