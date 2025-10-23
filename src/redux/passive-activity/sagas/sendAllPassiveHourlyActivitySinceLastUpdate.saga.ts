/* eslint-disable @typescript-eslint/no-explicit-any */
import { Platform } from "react-native";
import RNFitKit, { FitKitTypes } from "@yu-life/react-native-fitkit";
import moment from "moment";
import { spawn, call, select, delay } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { getUserFeatures, getUserPassiveHourlyActivityLastUpdate } from "../../user/user.selectors";
import getPassiveHourlySinceLastUpdate from "./getPassiveHourlySinceLastUpdate.saga";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";
import { DETOX_ENABLED } from "@services/socket";
import { PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT } from "@services/constants";
import client from "@graphql/_core/client";
import { ChallengesPayload, gql } from "@graphql/__generated";

export default function* sendPassiveHourlyActivity(): any {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    if (!Object.keys(userFeatures).length) {
      return;
    }

    if (!userFeatures.shouldQueryHourlyActivity) {
      return;
    }

    const { steps: stepsLastUpdate, stepsQueryTimeRange } = yield select(getUserPassiveHourlyActivityLastUpdate);

    if (!stepsLastUpdate) {
      return;
    }

    const permissionGranted =
      Platform.OS === "ios"
        ? true
        : yield call(RNFitKit.isAuthorised, { read: [FitKitTypes.Types.StepCount], platform: "GoogleFit" });

    if (!permissionGranted) {
      return;
    }

    let dynamicStepsLastUpdate = stepsLastUpdate;
    let allResults: ChallengesPayload[] = [];
    let upToDate = isPassiveActivityUpToDate(dynamicStepsLastUpdate);

    let attempts = 0;

    while (!upToDate && attempts < 12) {
      attempts++;

      allResults = yield call(
        getPassiveHourlySinceLastUpdate,
        upToDate ? undefined : dynamicStepsLastUpdate,
        userFeatures,
        stepsQueryTimeRange
      );

      if (allResults.length) {
        while (allResults.length > 0) {
          const payload = allResults.splice(0, PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT);
          let isUpdated = false;

          while (!isUpdated) {
            try {
              yield call(() =>
                client().mutate({
                  mutation: gql("UpdateUserHourlyActivityDocument"),
                  variables: { payload },
                  errorPolicy: "ignore",
                })
              );

              if (!DETOX_ENABLED) {
                yield delay(5000);
              }

              isUpdated = true;
            } catch (e) {
              yield spawn(() => {
                Logger.error(e, { event: "updateUserHourlyActivity" });
              });
              yield delay(15000);
            }
          }
        }
      }

      dynamicStepsLastUpdate = moment(dynamicStepsLastUpdate).add(PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT, "hours").format();
      upToDate = isPassiveActivityUpToDate(dynamicStepsLastUpdate);

      if (!upToDate && !DETOX_ENABLED) {
        yield delay(5000);
      }
    }
  } catch (e) {
    yield call(() => {
      Logger.error(e, { event: "sendPassiveHourlyActivitySinceLastUpdate" });
    });
  }
}

const isPassiveActivityUpToDate = (stepsLastUpdate: string) => {
  const previousHourMoment = moment().startOf("hour").subtract(1, "hour");
  const isStepLastUpdatePreviousHour = moment(stepsLastUpdate).startOf("hour").isSameOrAfter(previousHourMoment);

  return isStepLastUpdatePreviousHour;
};
