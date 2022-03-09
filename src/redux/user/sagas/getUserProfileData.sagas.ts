import { updateDailyCyclingDistanceMeasurementType } from "@redux/daily-cycling/daily-cycling.actions";
import getUserProfile from "@graphql/user/getUserProfile.gql";
import { call, put, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import { getToken } from "@services/storage";
import { updateStepsMaxAnomalyDetectionWindow } from "@redux/daily-steps/daily-steps.actions";
import { updateUserProfile } from "@redux/user/user.actions";

export default function* getUserProfileData(dataPayload: { payload: string; type: string }) {
  const { payload: appState, type } = dataPayload || {};
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
      yield put(updateDailyCyclingDistanceMeasurementType(userProfile.getUserProfile.gameSettings.cyclingMeasurement));
      yield put(updateStepsMaxAnomalyDetectionWindow(userProfile.getUserProfile.gameSettings.maxStepsAnomalyWindowMs));
      yield put(updateUserProfile(userProfile?.getUserProfile));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getUserProfileData" });
    });
  }

  return;
}
