import RNFitKit from "@services/fitkit/fitkit.service";
import {
  HealthDataType,
  ISampleQueryResponse,
  getForegroundSteps,
  HealthProvider,
} from "@yu-life/react-native-yu-health";
import EngagementTracking from "@services/logging/engagement-tracking";
import Logger from "@services/logger/logger";
import { DATE_FORMAT_WITH_TZ, Unpacked, getStartAndEndDateTimesWithTimezone } from "@utils";
import { sumSampleValues } from "@utils/number";
import { AUTO_ROUND_DATA_TYPES, isForegroundServiceEnabled } from "@utils/yuHealth";
import moment from "moment";
import { queryFitKitSampleData } from "@services/fitkit/fitkit.helpers";
import { IActiveLevel } from "./levels.types";
import { delay } from "@utils/misc";
import { FitKitSampleType, GenericFitKitResponseType } from "@services/fitkit/fitkit.types";
import { IFeature } from "@redux/user/user.types";
import { yuHealthPedometerQuery, yuHealthSampleQuery } from "@services/fitkit/yu-health.helpers";
import { FitKitType } from "@redux/_core/types";

const PROTECTED_DATA_INACCESSIBLE_ERROR = "Protected health data is inaccessible";
const RETRIES = 5;

export async function logEmptyResultDebugData({
  features,
  result,
  activeChallenge,
  blacklistApps,
}: {
  activeChallenge: IActiveLevel;
  blacklistApps: string[];
  features: IFeature;
  result: Unpacked<typeof getEndResultFitkit>;
}) {
  const { yuHealth } = activeChallenge;

  if (!yuHealth) {
    Logger.error(new Error("logEmptyResultDebugData called without yuHealth"), {
      file: "levels.helpers",
      event: "logEmptyResultDebugData",
    });
    return;
  }

  const data = await yuHealthSampleQuery({
    params: {
      startTime: moment().subtract(1, "day").startOf("day").toDate(),
      endTime: moment().endOf("day").toDate(),
      dataType: yuHealth.dataType,
    },
    features,
    metadata: { file: "levels.helpers" },
  });

  const logData = {
    data,
    result,
    blacklistApps,
    fitKitTypes: activeChallenge.fitKitTypes,
    activeChallengeEndTime: activeChallenge.endDateTime,
    activeChallengeStartTime: activeChallenge.startDateTime,
    activeChallengeFitKitTypes: activeChallenge.fitKitTypes,
  };

  EngagementTracking.logMixpanelEvent("end_challenge_no_data", logData);
}

let hasLoggedError = false;
/**
 * YuHealth - getPedometerEndResult
 * @remarks
 * Gets the end results for a challenge that is steps
 */
const getPedometerEndResult = async ({
  activeLevel,
  blacklistApps,
  activeProvider,
  features,
}: {
  activeLevel: IActiveLevel;
  blacklistApps: string[];
  activeProvider?: HealthProvider;
  features: IFeature;
}) => {
  const { startDateTime, endDateTime, score } = activeLevel;

  let foregroundSteps = 0;
  if (isForegroundServiceEnabled({ features, activeProvider })) {
    try {
      foregroundSteps = await getForegroundSteps();
    } catch (e) {
      Logger.notify(e, {
        message: "Error getting foreground steps",
        file: "levels.helpers",
        event: "getPedometerEndResult",
      });
    }
  }

  // If we are querying step count, we should use pedometer data instead of sample data
  const { start, end } = getStartAndEndDateTimesWithTimezone(startDateTime, endDateTime);

  try {
    const pedometerResults = await yuHealthPedometerQuery({
      startTime: moment(start).toDate(),
      endTime: moment(end).toDate(),
      queryOptions: {
        blacklistApps: blacklistApps,
        disableUserEntries: features.disableUserEntries,
      },
    });

    const pedometerValue = pedometerResults?.value ?? 0;

    EngagementTracking.logMixpanelEvent("end_challenge_result", {
      startDateTime,
      endDateTime,
      start,
      end,
      score,
      pedometerValue,
    });

    const value = Math.max(pedometerValue, foregroundSteps, score);
    return { value };
  } catch (e) {
    // This method is called frequently when a user completes a challenge. It can fail for various reasons, most of which we don't care about. We limit Bugsnag logging for this method to once per session
    if (!hasLoggedError) {
      Logger.notify(e, { event: "getPedometerEndResult" });
      hasLoggedError = true;
    }

    // This will now show the no-data-defer modal if there's an error fetching data
    return { value: 0 };
  }
};

/**
 * YuHealth - getNonPedometerEndResult
 * @remarks
 * Gets the end results for a challenge that is not steps
 */
const getNonPedometerEndResult = async ({
  features,
  activeLevel,
  blacklistApps,
}: {
  activeLevel: IActiveLevel;
  blacklistApps: string[];
  features: IFeature;
}) => {
  const { startDateTime, endDateTime, yuHealth, additionalChallengePeriodDisabled } = activeLevel;

  const dataType = yuHealth?.dataType;

  if (!dataType) {
    Logger.error(new Error("getNonPedometerEndResult called without yuHealth dataType"), {
      file: "levels.helpers",
      event: "getNonPedometerEndResult",
    });
    return { value: 0 };
  }

  const sharedParams = {
    features,
    queryOptions: { blacklistApps, disableUserEntries: features.disableUserEntries },
    metadata: { file: "levels.helpers" },
  };

  const queryResult = await yuHealthSampleQuery({
    params: {
      dataType,
      startTime: moment(startDateTime).toDate(),
      endTime: moment(endDateTime).toDate(),
    },
    ...sharedParams,
  });

  // We do this to effectively filter blacklist apps, user entries etc which is impossible with aggregate queries
  // Some apps (headspace 😡) return results with very high precision eg 69.123912391293129 which isn't supported by our gql mutation
  const sumSamples = (results: ISampleQueryResponse[]) => sumSampleValues(results, AUTO_ROUND_DATA_TYPES.has(dataType));

  if (queryResult.length > 0) {
    return {
      value: sumSamples(queryResult),
    };
  }

  if (additionalChallengePeriodDisabled) {
    return {
      value: 0,
    };
  }

  // 3rd party apps (calm/headspace/etc) are not consistent in saving the correct times if timezone is changed
  // So we'll make an additional query to be 1 hour before and 1 hour after if we find no data on the initial query
  const startEarly = moment(startDateTime).subtract(1, "hours").toDate();
  const endLater = moment(endDateTime).add(1, "hours").toDate();
  const earlyQueryResult = await yuHealthSampleQuery({
    params: {
      dataType,
      startTime: startEarly,
      endTime: endLater,
    },
    ...sharedParams,
  });

  if (earlyQueryResult.length > 0) {
    return {
      value: sumSamples(earlyQueryResult),
    };
  }

  return {
    value: 0,
  };
};

export async function getEndResult({
  active,
  stepsBlackListApps,
  activeProvider,
  features,
}: {
  active: IActiveLevel;
  stepsBlackListApps: string[];
  activeProvider?: HealthProvider;
  features: IFeature;
}) {
  if (!features.tempGameEnableReleaseYuHealthV4) {
    return getEndResultFitkit(active, stepsBlackListApps, features);
  }

  const { startDateTime, endDateTime, yuHealth } = active;
  if (!yuHealth?.dataType) {
    return { startDateTime, endDateTime, value: 0 };
  }

  if (yuHealth.dataType === HealthDataType.steps) {
    return await getPedometerEndResult({
      activeLevel: active,
      blacklistApps: stepsBlackListApps,
      activeProvider,
      features,
    });
  }

  return getNonPedometerEndResult({ activeLevel: active, blacklistApps: stepsBlackListApps, features });
}

export async function getEndResultFitkit(
  {
    startDateTime,
    endDateTime,
    score,
    subtype,
    fitKitTypes,
    additionalChallengePeriodDisabled,
    challengeDataQueryRetryLimit,
  }: IActiveLevel,
  blackListApps: string[],
  features: Record<string, boolean> = {}
) {
  if (subtype === "sudoku") {
    return { startDateTime, endDateTime, value: 0 };
  }

  if (!fitKitTypes.includes(FitKitType.StepCount)) {
    try {
      const metaData = { file: "levels.helpers" };
      const { start, end } = getStartAndEndDateTimesWithTimezone(startDateTime, endDateTime);

      const fitkitSampleTypes = {
        startTime: start,
        endTime: end,
        fitKitTypes,
        features,
        metaData,
      };

      const { results: queryResult } =
        challengeDataQueryRetryLimit > 0
          ? await queryFitKitSampleDataWithRetries({
              fitkitTypes: fitkitSampleTypes,
              challengeDataQueryRetryLimit,
            })
          : await queryFitKitSampleData(fitkitSampleTypes);

      // the way the 3rd party apps like calm/headspace write to the history is not always consistent
      // if someone's got their timezone changed
      // sometimes it might happen that the meditation was written in the wrong period
      // the agreed solution for the beginning was to query the timeframe we've got at first
      // then if there are no results, make another query for the whole day
      // as of july 2019, it's changed to 2 hours before and 2 hours later
      // as of july 2021, it's changed to 1 hour before and 1 after
      if (queryResult.length > 0) {
        return {
          value: Math.floor(queryResult.reduce((acc, item) => acc + item.value, 0)),
        };
      }

      if (additionalChallengePeriodDisabled) {
        return {
          value: 0,
        };
      }

      const startEarly = moment(startDateTime).subtract(1, "hours").format(DATE_FORMAT_WITH_TZ);
      const endLater = moment(endDateTime).add(1, "hours").format(DATE_FORMAT_WITH_TZ);
      const { results: queryResultAllDay } = await queryFitKitSampleData({
        startTime: startEarly,
        endTime: endLater,
        fitKitTypes,
        features,
        metaData,
      });

      if (queryResultAllDay.length > 0) {
        return {
          value: Math.floor(queryResultAllDay.reduce((acc, item) => acc + item.value, 0)),
        };
      }

      return {
        value: 0,
      };
    } catch {
      return {
        value: 0,
      };
    }
  }

  try {
    const { start, end } = getStartAndEndDateTimesWithTimezone(startDateTime, endDateTime);
    // RNFitKit.queryPedometerFromDate
    // Android: queries google fit history, steps from sensor are stored in score
    // iOS: fetches steps from sensors

    const pedometerResults = await RNFitKit.queryPedometerFromDate(start, end, { blackListApps });
    const pedometerValue = pedometerResults?.steps || 0;

    EngagementTracking.logMixpanelEvent("end_challenge_result", {
      startDateTime,
      endDateTime,
      start,
      end,
      score,
      pedometerValue,
    });

    const value = Math.max(pedometerValue, score);

    return { value };
  } catch (e) {
    Logger.notify(e, {
      startDateTime,
      endDateTime,
      message: e.message,
      where: "debug_query_pedometer_from_date_steps_error",
    });

    return {
      value: score,
    };
  }
}

export function getAvailableChallengesForToday(
  level: number,
  totalChallengesDoneToday: number,
  availableChallengesToday: number,
  nextLevelAvailableAt: string
) {
  const availableChallengesMinusOne = availableChallengesToday - 1;
  const challengesLeft = availableChallengesToday - totalChallengesDoneToday;
  const challengesLeftMinusOne = challengesLeft - 1;
  const isNextLevelAvailableAt = moment().isBefore(moment(nextLevelAvailableAt));

  // don't subtract a challenge during yuniversal or after
  if (level > 200) {
    return challengesLeft;
  }

  // when you do level 49/99/149
  // your current level becomes 51/101/151 so technically you're allowed to take another challenge
  // and that should not happen
  if (
    level % 50 === 1 && // check if it's first level of the world
    Math.floor(level / 50) === totalChallengesDoneToday && // check if you already did 1/2/3 challenges today
    !!nextLevelAvailableAt && // check if nextLevelAvailableAt is not empty
    isNextLevelAvailableAt // check if nextLevelAvailableAt is past the current day
  ) {
    return challengesLeftMinusOne;
  }

  if (level % 50 === 1 && availableChallengesMinusOne > 1 && isNextLevelAvailableAt) {
    return challengesLeftMinusOne;
  }

  return challengesLeft;
}

interface QueryFitkitSampleDataWithRetriesArgs {
  fitkitTypes: FitKitSampleType<false>;
  retries?: number;
  queryError?: boolean | string;
  challengeDataQueryRetryLimit?: number;
}

async function queryFitKitSampleDataWithRetries({
  fitkitTypes,
  retries = 0,
  queryError = false,
  challengeDataQueryRetryLimit = RETRIES,
}: QueryFitkitSampleDataWithRetriesArgs): Promise<GenericFitKitResponseType<false>> {
  // too many retries
  if (retries > challengeDataQueryRetryLimit) {
    return { results: [], error: queryError };
  }

  const response = await queryFitKitSampleData(fitkitTypes);
  const { errorUserInfo, error } = response;

  // there was some error try again
  if (errorUserInfo && errorUserInfo.NSLocalizedDescription === PROTECTED_DATA_INACCESSIBLE_ERROR) {
    await delay(3000);
    return await queryFitKitSampleDataWithRetries({
      fitkitTypes,
      retries: retries + 1,
      queryError: error,
      challengeDataQueryRetryLimit,
    });
  }

  // return the data
  return response;
}

/** @deprecated should be returned from the backend */
const MAX_AVAILABLE = 4;

/** @deprecated should be returned from the backend */
export function getChallengesAmountAvailable(level: number) {
  const available = Math.floor((level - 1) / 50) + 1;
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  return available > MAX_AVAILABLE ? MAX_AVAILABLE : available;
}
