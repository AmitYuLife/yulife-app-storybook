import moment, { Moment } from "moment";
import { all, call, select, spawn, delay, put } from "redux-saga/effects";
import { queryFitKitSampleData, queryFitKitAggregatedData } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { UPDATE_APP_STATE, updateAppState } from "../../app/app.actions";
import { getUserFeatures } from "../../user/user.selectors";
import upsertDailyPassives from "@graphql/challenges/upsertDailyPassives.gql";
import {
  UPDATE_IN_APP_MEDITATION,
  updateDailyMeditation,
  updateInAppMeditation,
} from "@redux/daily-meditation/daily-meditation.actions";
import { updateDailyCycling } from "@redux/daily-cycling/daily-cycling.actions";
import { PermissionsAndroid, Platform } from "react-native";
import { totalCoinsUpdated } from "@redux/coins/coins.actions";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import RNFitKit, { FitKitTypes } from "@yu-life/react-native-fitkit";
import { getInAppDailyMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import { processResult, processYuHealthResult } from "@services/fitkit/helpers/sampleToAggregatedData";
import { QueryFitKitByTypesResponse } from "@services/fitkit/fitkit.types";
import { getAggregationCyclingConfiguration, getMindfulSessionFitKitTypes } from "@services/fitkit/fitkit.config";
import { IFeature } from "@redux/user/user.types";
import { yuHealthAggregateQuery } from "@services/fitkit/yu-health.helpers";
import { BucketSize, HealthDataType, IAggregateQueryResponse } from "@yu-life/react-native-yu-health";
import { IAppDailyMeditationProps } from "@redux/daily-meditation/daily-meditation.types";
import { ChallengesPayload, PassiveChallengeType } from "@graphql/__generated";
import { toReduxChallenge } from "./utils";
import { GET_USER_TODAY_ACTIVITY_SUCCESS, getUserTodayActivitySuccess } from "@redux/user/user.actions";

export default function* getDailyPassiveActivity(
  dataPayload:
    | ReturnType<typeof updateAppState>
    | ReturnType<typeof updateInAppMeditation>
    | ReturnType<typeof getUserTodayActivitySuccess>
) {
  try {
    const { payload, type } = dataPayload || {};
    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

    if (
      features.tempGameGetInAppMeditationFromServer &&
      (type === UPDATE_APP_STATE || type === UPDATE_IN_APP_MEDITATION)
    ) {
      return;
    }

    if (!features.tempGameGetInAppMeditationFromServer && type === GET_USER_TODAY_ACTIVITY_SUCCESS) {
      return;
    }

    if (type === UPDATE_APP_STATE && payload.appState !== "active") {
      return;
    }

    const token: Unpacked<typeof getToken> = yield call(getToken);
    if (!token) {
      return;
    }

    if (!Object.keys(features).length) {
      return;
    }

    const setDefaultPermissionCheck = features.disableCheckPermission || Platform.OS === "ios";
    const [meditationPermissionGranted, cyclingPermissionGranted] = yield all([
      setDefaultPermissionCheck
        ? true
        : call(RNFitKit.isAuthorised, { read: [FitKitTypes.Types.MindfulSession], platform: "GoogleFit" }),
      setDefaultPermissionCheck
        ? true
        : call(RNFitKit.isAuthorised, { read: [FitKitTypes.Types.Biking], platform: "GoogleFit" }),
    ]);

    if ((!meditationPermissionGranted || !cyclingPermissionGranted) && features.loggingEnabled) {
      Logger.logMixpanelEvent("app_debug", {
        type: "google_fit_permission_not_granted",
        permissions: {
          cycling: cyclingPermissionGranted,
          mindful: meditationPermissionGranted,
        },
        location: "getDailyPassiveActivity",
      });
    }

    const startTime = moment().startOf("day");
    const endTime = moment().endOf("day");

    const inAppDailyMeditation: ReturnType<typeof getInAppDailyMeditation> = yield select(getInAppDailyMeditation);

    const meditationResults: ChallengesPayload[] = yield call(getMeditation, {
      startTime: startTime,
      endTime: endTime,
      features: features,
      inAppMeditation: inAppDailyMeditation,
      meditationPermissionGranted,
    });

    let shouldQueryCycling = true;
    if (Platform.OS === "android") {
      shouldQueryCycling = yield call(PermissionsAndroid.check, "android.permission.ACCESS_FINE_LOCATION") &&
        cyclingPermissionGranted;
    }

    const cyclingResults: ChallengesPayload[] = !shouldQueryCycling
      ? []
      : yield call(getCycling, {
          startTime: startTime,
          endTime: endTime,
          features: features,
        });

    if (!meditationResults?.length && !cyclingResults?.length) {
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
            yield put(updateDailyMeditation(toReduxChallenge(challenge)));
          }

          if (challenge?.incomingData.distance > 0) {
            yield put(updateDailyCycling(toReduxChallenge(challenge)));
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

const getMeditation = async ({
  startTime,
  endTime,
  features,
  inAppMeditation,
  meditationPermissionGranted,
}: {
  startTime: Moment;
  endTime: Moment;
  features: IFeature;
  inAppMeditation: IAppDailyMeditationProps;
  meditationPermissionGranted: boolean;
}): Promise<ChallengesPayload[]> => {
  if (!features.tempGameEnableReleaseYuHealthV4) {
    const meditationResponse = !meditationPermissionGranted
      ? null
      : await queryFitKitSampleData({
          startTime: startTime.format(),
          endTime: endTime.format(),
          features,
          fitKitTypes: getMindfulSessionFitKitTypes(),
          metaData: { file: "getDailyPassiveActivity.saga.getMeditation" },
        });

    const fitkitAndInAppMeditation = parseMeditation(
      inAppMeditation,
      meditationResponse,
      features.tempGameGetInAppMeditationFromServer
    );
    if (!fitkitAndInAppMeditation.results?.length) {
      return [];
    }

    return processResult(fitkitAndInAppMeditation, "MindfulSession", startTime, endTime);
  }

  const yuHealthMeditation = !meditationPermissionGranted
    ? []
    : await yuHealthAggregateQuery({
        features,
        metadata: { file: "getDailyPassiveActivity.saga.getMeditation" },
        params: {
          startTime: startTime.toDate(),
          dataType: HealthDataType.mindfulMinutes,
          endTime: endTime.toDate(),
          bucketConfig: { value: 1, unit: BucketSize.day },
        },
      });

  const yuHealthAndInAppMeditation = parseYuHealthMeditation(
    inAppMeditation,
    yuHealthMeditation,
    features.tempGameGetInAppMeditationFromServer
  );

  if (!yuHealthAndInAppMeditation.length) {
    return [];
  }

  return processYuHealthResult(yuHealthAndInAppMeditation, startTime, endTime, PassiveChallengeType.Meditation);
};

const getCycling = async ({
  startTime,
  endTime,
  features,
}: {
  startTime: Moment;
  endTime: Moment;
  features: IFeature;
}): Promise<ChallengesPayload[]> => {
  if (!features.tempGameEnableReleaseYuHealthV4) {
    const cyclingConfig = getAggregationCyclingConfiguration(features);

    const response = await queryFitKitAggregatedData({
      start: startTime,
      end: endTime,
      features: features,
      metaData: { file: "getDailyPassiveActivity.saga.getCycling" },
      ...cyclingConfig,
    });

    if (!response.results?.length) {
      return [];
    }

    return processResult(response, "Biking", startTime, endTime);
  }

  const yuHealthCycling = await yuHealthAggregateQuery({
    features,
    metadata: { file: "getDailyPassiveActivity.saga.getCycling" },
    params: {
      startTime: startTime.toDate(),
      dataType: HealthDataType.cyclingDistance,
      endTime: endTime.toDate(),
      bucketConfig: { value: 1, unit: BucketSize.day },
    },
  });

  if (!yuHealthCycling.length) {
    return [];
  }

  return processYuHealthResult(yuHealthCycling, startTime, endTime, PassiveChallengeType.Cycling);
};

const parseYuHealthMeditation = (
  inAppMeditation: IAppDailyMeditationProps,
  yuHealthMeditation: IAggregateQueryResponse[],
  tempGameGetInAppMeditationFromServer: boolean
): IAggregateQueryResponse[] => {
  const getStartTime = () => {
    if (tempGameGetInAppMeditationFromServer) {
      return inAppMeditation.date ? moment(inAppMeditation.date).toDate() : moment().toDate();
    }

    return inAppMeditation.createdAt ? moment.unix(inAppMeditation.createdAt).toDate() : moment().toDate();
  };

  const inAppMeditationResponse: IAggregateQueryResponse = {
    value: inAppMeditation.duration,
    endTime: moment().toDate(),
    startTime: getStartTime(),
  };

  if (!yuHealthMeditation.length && !inAppMeditation.duration) {
    return [];
  }

  if (!yuHealthMeditation.length && inAppMeditation.duration) {
    return [inAppMeditationResponse];
  }

  if (yuHealthMeditation.length && !inAppMeditation.duration) {
    return yuHealthMeditation;
  }

  return [...yuHealthMeditation, inAppMeditationResponse];
};

const parseMeditation = (
  inAppMeditation: IAppDailyMeditationProps,
  fitkitMeditation: QueryFitKitByTypesResponse,
  tempGameGetInAppMeditationFromServer: boolean
): QueryFitKitByTypesResponse => {
  const getStartTime = () => {
    if (tempGameGetInAppMeditationFromServer) {
      return inAppMeditation.date ? moment(inAppMeditation.date).format() : moment().format();
    }

    return inAppMeditation.createdAt ? moment.unix(inAppMeditation.createdAt).format() : moment().format();
  };

  const inAppMeditationResponse = {
    value: inAppMeditation.duration,
    endDateTime: moment().format(),
    startDateTime: getStartTime(),
    type: PassiveChallengeType.Meditation,
    isInApp: true,
  };

  if (!fitkitMeditation && !inAppMeditation.duration) {
    return {
      error: true,
      results: [],
    };
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
