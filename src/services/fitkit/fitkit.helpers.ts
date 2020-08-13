import { IUserStore } from "@redux/user/user.reducer";
import RNFitKit, { FitKitTypes, PedometerResponse, SampleQueryResult } from "@services/fitkit/fitkit.service";
import moment, { Moment } from "moment";
import { ChallengePayload } from "../../graphql/_core/schema/globalTypes";
import Logger from "../logging/logger";
import { DATE_FORMAT_WITH_TZ } from "../utils";
import { createContext } from "react";
import { FitKitAvailableChildrenProps } from "react-native-fitkit";

export const mapPedometerResults = (results: PedometerResponse): ChallengePayload => ({
  endDateTime: moment(results.endTime).format(),
  startDateTime: moment(results.startTime).format(),
  value: Math.floor(results.steps),
});

export const transformSampleResultToPayload = (item: SampleQueryResult): ChallengePayload => ({
  endDateTime: moment(item.endTime).format(),
  startDateTime: moment(item.startTime).format(),
  value: Math.floor(item.value),
});

export const queryMindfulSessions = async (
  startTime: string,
  endTime: string,
  { disableUserEntries = true, loggingEnabled = false }: IUserStore["features"] = {}
): Promise<ChallengePayload[]> => {
  try {
    const args = {
      disableUserEntries,
      endTime,
      startTime,
      type: FitKitTypes.Types.MindfulSession,
    };

    if (loggingEnabled) {
      Logger.logMixpanelEvent("raw_meditation_query_args", args);
    }

    const results = await RNFitKit.sampleQuery(args);

    if (loggingEnabled && results && results.length > 0) {
      Logger.logMixpanelEvent("raw_meditation_query_results", { results });
    }

    return results.map(transformSampleResultToPayload);
  } catch (e) {
    Logger.logMixpanelEvent("raw_meditation_query_error", { error: e.message });
    return [];
  }
};

export const querySteps = async (
  start: Moment,
  end: Moment,
  { disableUserEntries = true, loggingEnabled = false }: IUserStore["features"] = {}
): Promise<{ results: ChallengePayload[]; error: string | null }> => {
  try {
    const startTime = start.format(DATE_FORMAT_WITH_TZ);
    const endTime = end.format(DATE_FORMAT_WITH_TZ);
    const args = {
      aggregateBy: {
        bucketSize: { value: 1, type: FitKitTypes.TimeRange.DAYS },
        type: FitKitTypes.AggregateType.Time,
      },
      disableUserEntries,
      endTime,
      startTime,
      type: FitKitTypes.Types.StepCount,
    };

    if (loggingEnabled) {
      Logger.logMixpanelEvent("raw_steps_query_args", args);
    }

    const results = await RNFitKit.aggregateQuery(args);

    if (loggingEnabled && results && results.length > 0) {
      Logger.logMixpanelEvent("raw_steps_query_results", { results });
    }

    return { results: results.map(transformSampleResultToPayload as any), error: null };
  } catch (e) {
    Logger.logMixpanelEvent("raw_steps_query_error", { error: e.message });
    return { results: [], error: e.message };
  }
};

export const queryCycling = async (
  startTime: string,
  endTime: string,
  { disableUserEntries = true, loggingEnabled = false }: IUserStore["features"] = {}
): Promise<ChallengePayload[]> => {
  try {
    const args = {
      disableUserEntries,
      endTime,
      startTime,
      type: FitKitTypes.Types.Biking,
    };

    if (loggingEnabled) {
      Logger.logMixpanelEvent("raw_cycling_query_args", args);
    }

    const results = await RNFitKit.sampleQuery(args);

    if (loggingEnabled && results && results.length > 0) {
      Logger.logMixpanelEvent("raw_cycling_query_results", { results });
    }

    return results.map(transformSampleResultToPayload);
  } catch (e) {
    Logger.logMixpanelEvent("raw_cycling_query_error", { error: e.message });
    return [];
  }
};

export const queryHistoricalData = async (onboardingDate: Moment) => {
  const start = onboardingDate.clone().subtract(60, "days");
  const end = onboardingDate.clone().subtract(1, "days");

  return querySteps(start, end, { disableUserEntries: false });
};

export const queryHistoricalMeditationData = async (onboardingDate: Moment, userFeature: IUserStore["features"]) => {
  const start = onboardingDate.clone().subtract(60, "days");
  const end = onboardingDate.clone().subtract(1, "days");

  return queryMindfulSessions(start.format(), end.format(), userFeature);
};

export const authoriseCycling = async () => {
  try {
    await RNFitKit.authorise({
      read: [FitKitTypes.Types.Biking],
    });
  } catch (e) {
    // console.log("welp... ", e);
  }
};

const fitkitInitialState: FitKitAvailableChildrenProps = {
  authorise: () => null,
  authorised: false,
  available: false,
  loading: true,
};

export const FitkitContext = createContext(fitkitInitialState);
