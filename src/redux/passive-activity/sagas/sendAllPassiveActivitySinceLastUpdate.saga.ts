/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import { spawn, call, select, delay, put } from "redux-saga/effects";
import Logger from "@services/logger/logger";
import { getUserFeatures, getUserPassiveChallengesLastUpdate } from "../../user/user.selectors";
import upsertDailyPassives from "@graphql/challenges/upsertDailyPassives.gql";
import { Platform } from "react-native";
import { refreshTotalCoins } from "@redux/coins/coins.actions";
import getPassiveSinceLastUpdateAndroid from "./getPassiveSinceLastUpdateAndroid.saga";
import getPassiveSinceLastUpdateIos from "./getPassiveSinceLastUpdateIos.saga";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";
import { PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT } from "@services/constants";
import { DETOX_ENABLED } from "@services/socket";
import { ChallengesPayload } from "@graphql/__generated";
import { randomUUID } from "expo-crypto";
import { updateUserPassiveChallengeSessionId } from "@redux/user/user.actions";

export default function* sendPassiveActivity(): any {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    if (!Object.keys(userFeatures).length) {
      return;
    }

    const {
      meditation: meditationLastUpdate,
      cycling: cyclingLastUpdate,
      steps: stepsLastUpdate,
      sessionId: sessionIdFromState,
    } = yield select(getUserPassiveChallengesLastUpdate);

    if (!stepsLastUpdate && !meditationLastUpdate && !cyclingLastUpdate) {
      return;
    }

    const sessionId = sessionIdFromState || randomUUID();

    if (!sessionIdFromState) {
      yield put(updateUserPassiveChallengeSessionId(sessionId));
    }

    let awardedYucoin = 0;
    let dynamicStepsLastUpdate = stepsLastUpdate;
    let dynamicMeditationLastUpdate = meditationLastUpdate;
    let dynamicCyclingLastUpdate = cyclingLastUpdate;
    let allResults: ChallengesPayload[] = [];
    let lastUpdateValidation = isPassiveActivityUpToDate(
      dynamicStepsLastUpdate,
      dynamicMeditationLastUpdate,
      dynamicCyclingLastUpdate
    );

    let attempts = 0;

    while (!lastUpdateValidation.upToDate && attempts < 12) {
      attempts++;

      const { isStepLastUpdateYesterday, isMeditationLastUpdateYesterday, isCyclingLastUpdateYesterday } =
        lastUpdateValidation;

      if (Platform.OS === "android") {
        allResults = yield call(
          getPassiveSinceLastUpdateAndroid,
          isStepLastUpdateYesterday ? undefined : dynamicStepsLastUpdate,
          isMeditationLastUpdateYesterday ? undefined : dynamicMeditationLastUpdate,
          isCyclingLastUpdateYesterday ? undefined : dynamicCyclingLastUpdate,
          userFeatures
        );
      } else {
        allResults = yield call(
          getPassiveSinceLastUpdateIos,
          isStepLastUpdateYesterday ? undefined : dynamicStepsLastUpdate,
          isMeditationLastUpdateYesterday ? undefined : dynamicMeditationLastUpdate,
          isCyclingLastUpdateYesterday ? undefined : dynamicCyclingLastUpdate,
          userFeatures
        );
      }

      dynamicStepsLastUpdate = moment(dynamicStepsLastUpdate).add(PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT, "days").format();
      dynamicMeditationLastUpdate = moment(dynamicMeditationLastUpdate)
        .add(PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT, "days")
        .format();
      dynamicCyclingLastUpdate = moment(dynamicCyclingLastUpdate)
        .add(PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT, "days")
        .format();

      const lastUpdateData = isPassiveActivityUpToDate(
        dynamicStepsLastUpdate,
        dynamicMeditationLastUpdate,
        dynamicCyclingLastUpdate
      );

      if (allResults.length) {
        while (allResults.length > 0) {
          // splice mutates the array, fix later
          const payload = allResults.splice(0, 15);
          const hasLastItem = allResults.length === 0 && lastUpdateData.upToDate;

          let isUpdated = false;

          while (!isUpdated) {
            try {
              const response: Unpacked<typeof upsertDailyPassives> = yield call(
                upsertDailyPassives,
                payload,
                sessionId,
                hasLastItem
              );

              awardedYucoin += response?.data?.upsertDailyPassives?.totalCoins || 0;
              if (!DETOX_ENABLED) {
                yield delay(5000);
              }

              isUpdated = true;
            } catch (e) {
              yield spawn(() => {
                Logger.notify(e, { event: "upsertPassiveChallengesSinceLastUpdate" });
              });
              yield delay(15000);
            }
          }
        }
      }

      lastUpdateValidation = isPassiveActivityUpToDate(
        dynamicStepsLastUpdate,
        dynamicMeditationLastUpdate,
        dynamicCyclingLastUpdate
      );

      if (!lastUpdateValidation.upToDate && !DETOX_ENABLED) {
        yield delay(5000);
      }
    }

    // complete backfill activity, we can reset session ID
    yield put(updateUserPassiveChallengeSessionId());

    if (awardedYucoin > 0) {
      // check for token before showing collect modal
      // user can logout before last update query is finished
      const userToken: Unpacked<typeof getToken> = yield call(getToken);
      if (!userToken) {
        return;
      }

      yield put(refreshTotalCoins());
    }
  } catch (e) {
    yield call(() => {
      Logger.notify(e, { event: "sendPassiveActivitySinceLastUpdate" });
    });
  }
}

const isPassiveActivityUpToDate = (
  stepsLastUpdate: string,
  meditationLastUpdate: string,
  cyclingLastUpdate: string
) => {
  const yesterdayMoment = moment().startOf("day").subtract(1, "day");
  const isStepLastUpdateYesterday = moment(stepsLastUpdate).startOf("day").isSameOrAfter(yesterdayMoment);
  const isMeditationLastUpdateYesterday = moment(meditationLastUpdate).startOf("day").isSameOrAfter(yesterdayMoment);
  const isCyclingLastUpdateYesterday = moment(cyclingLastUpdate).startOf("day").isSameOrAfter(yesterdayMoment);

  const upToDate = isStepLastUpdateYesterday && isMeditationLastUpdateYesterday && isCyclingLastUpdateYesterday;
  return { upToDate, isStepLastUpdateYesterday, isMeditationLastUpdateYesterday, isCyclingLastUpdateYesterday };
};
