import moment from "moment";
import { all, call, select, spawn, delay, put } from "redux-saga/effects";
import { ChallengesPayload, PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import { queryFitKitSampleData, queryFitKitAggregatedData } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { UPDATE_APP_STATE } from "../../app/app.actions";
import { getUserFeatures } from "../../user/user.selectors";
import upsertDailyPassives from "@graphql/challenges/upsertDailyPassives.gql";
import { IAppMeditationPayload, updateDailyMeditation } from "@redux/daily-meditation/daily-meditation.actions";
import { updateDailyCycling } from "@redux/daily-cycling/daily-cycling.actions";
import { PermissionsAndroid, Platform } from "react-native";
import { totalCoinsUpdated } from "@redux/coins/coins.actions";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import RNFitKit, { FitKitTypes } from "@yu-life/react-native-fitkit";
import { getInAppDailyMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import { processResult } from "@services/fitkit/helpers/sampleToAggregatedData";
import { QueryFitKitByTypesResponse } from "@services/fitkit/fitkit.types";
import { getAggregationCyclingConfiguration, getMindfulSessionFitKitTypes } from "@services/fitkit/fitkit.config";

export default function* getDailyPassiveActivity(dataPayload: { payload: string; type: string }) {
  const { payload: appState, type } = dataPayload || {};
  if (type === UPDATE_APP_STATE && appState !== "active") {
    return;
  }

  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    if (!Object.keys(userFeatures).length) {
      return;
    }

    const setDefaultPermissionCheck = userFeatures.disableCheckPermission || Platform.OS === "ios";
    const [meditationPermissionGranted, cyclingPermissionGranted] = yield all([
      setDefaultPermissionCheck
        ? true
        : call(RNFitKit.isAuthorised, { read: [FitKitTypes.Types.MindfulSession], platform: "GoogleFit" }),
      setDefaultPermissionCheck
        ? true
        : call(RNFitKit.isAuthorised, { read: [FitKitTypes.Types.Biking], platform: "GoogleFit" }),
    ]);

    if ((!meditationPermissionGranted || !cyclingPermissionGranted) && userFeatures.loggingEnabled) {
      Logger.logMixpanelEvent("app_debug", {
        type: "google_fit_permission_not_granted",
        permissions: {
          cycling: cyclingPermissionGranted,
          mindful: meditationPermissionGranted,
        },
        location: "getDailyPassiveActivity",
      });
    }

    if (!meditationPermissionGranted && !cyclingPermissionGranted) {
      return;
    }

    const startTime = moment().startOf("day");
    const endTime = moment().endOf("day");

    const inAppDailyMeditation: ReturnType<typeof getInAppDailyMeditation> = yield select(getInAppDailyMeditation);
    const fitkitMeditation: QueryFitKitByTypesResponse = !meditationPermissionGranted
      ? null
      : yield call(queryFitKitSampleData, {
          startTime: startTime.format(),
          endTime: endTime.format(),
          fitKitTypes: getMindfulSessionFitKitTypes(),
          features: userFeatures,
        });

    let shouldQueryCycling = true;
    if (Platform.OS === "android") {
      shouldQueryCycling = yield call(PermissionsAndroid.check, "android.permission.ACCESS_FINE_LOCATION") &&
        cyclingPermissionGranted;
    }

    const meditation = getMeditation(inAppDailyMeditation, fitkitMeditation);

    const cyclingConfig = getAggregationCyclingConfiguration(userFeatures);
    const cycling: QueryFitKitByTypesResponse = !shouldQueryCycling
      ? null
      : yield call(queryFitKitAggregatedData, {
          start: startTime,
          end: endTime,
          features: userFeatures,
          ...cyclingConfig,
        });

    if (!meditation?.results && !cycling?.results) {
      return;
    }

    const cyclingResults: ChallengesPayload[] = !shouldQueryCycling
      ? []
      : processResult(cycling, "Biking", startTime, endTime);

    const meditationResults: ChallengesPayload[] = !meditationPermissionGranted
      ? []
      : processResult(meditation, "MindfulSession", startTime, endTime);

    if (!cyclingResults.length && !meditationResults.length) {
      return;
    }

    let isUpdated = false;
    let retryDelayMs = 2000;
    while (!isUpdated && retryDelayMs <= 16000) {
      try {
        const response: Unpacked<typeof upsertDailyPassives> = yield call(
          upsertDailyPassives,
          meditationResults.concat(cyclingResults)
        );
        const mutationResult = response?.data?.upsertDailyPassives;

        if (!mutationResult?.challenges?.length) {
          return;
        }

        const challenges = mutationResult?.challenges ?? [];

        for (const challenge of challenges) {
          if (challenge?.incomingData.meditation > 0) {
            yield put(updateDailyMeditation(challenge));
          }

          if (challenge?.incomingData.distance > 0) {
            yield put(updateDailyCycling(challenge));
          }
        }

        if (mutationResult?.totalCoins > 0) {
          yield put(totalCoinsUpdated(mutationResult.currentBalance));
        }

        isUpdated = true;
      } catch (e) {
        yield spawn(() => {
          Logger.error(e, {
            event: "upsertDailyPassives",
          });
        });
        yield delay(retryDelayMs);
        retryDelayMs = retryDelayMs * 2;
      }
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getDailyPassiveActivity" });
    });
  }
}

const getMeditation = (
  inAppMeditation: IAppMeditationPayload,
  fitkitMeditation: QueryFitKitByTypesResponse
): QueryFitKitByTypesResponse => {
  const inAppMeditationResponse = {
    value: inAppMeditation.duration,
    endDateTime: moment().format(),
    startDateTime: inAppMeditation.createdAt ? moment.unix(inAppMeditation.createdAt).format() : moment().format(),
    type: PassiveChallengeType.MEDITATION,
    isInApp: true,
  };

  if (!fitkitMeditation && !inAppMeditation.duration) {
    return null;
  }

  if (!fitkitMeditation && inAppMeditation.duration) {
    return {
      error: false,
      results: [inAppMeditationResponse],
    };
  }

  if (fitkitMeditation && !inAppMeditation.duration) {
    return fitkitMeditation;
  }

  return {
    error: false,
    results: [...fitkitMeditation.results, inAppMeditationResponse],
  };
};
