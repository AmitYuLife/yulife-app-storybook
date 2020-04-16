import RNFitKit, { FitKitTypes, PedometerResponse, SampleQueryResult } from "@services/fitkit/fitkit.service";
import moment, { Moment } from "moment";
import { ChallengePayload } from "../../graphql/_core/schema/globalTypes";
import Logger from "../logging/logger";
import { DATE_FORMAT_WITH_TZ } from "../utils";

export const mapPedometerResults = (results: PedometerResponse): ChallengePayload => ({
    endDateTime: moment(results.endTime).format(),
    startDateTime: moment(results.startTime).format(),
    value: Math.floor(results.steps)
});

export const transformSampleResultToPayload = (item: SampleQueryResult): ChallengePayload => ({
    endDateTime: moment(item.endTime).format(),
    startDateTime: moment(item.startTime).format(),
    value: Math.floor(item.value)
});

export const queryMindfulSessions = async (
    startTime: string,
    endTime: string,
    { disableUserEntries = true, loggingEnabled = false }: { [name: string]: boolean } = {}
): Promise<ChallengePayload[]> => {
    try {
        const args = {
            disableUserEntries,
            endTime,
            startTime,
            type: FitKitTypes.Types.MindfulSession
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
    { disableUserEntries = true, loggingEnabled = false }: { [name: string]: boolean } = {}
): Promise<{ results: ChallengePayload[]; error: string | null }> => {
    try {
        const startTime = start.startOf("day").format(DATE_FORMAT_WITH_TZ);
        const endTime = end.endOf("day").format(DATE_FORMAT_WITH_TZ);
        const args = {
            aggregateBy: {
                bucketSize: { value: 1, type: FitKitTypes.TimeRange.DAYS },
                type: FitKitTypes.AggregateType.Time
            },
            disableUserEntries,
            endTime,
            startTime,
            type: FitKitTypes.Types.StepCount
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

export const queryHistoricalData = async (onboardingDate: Moment) => {
    const start = onboardingDate.clone().subtract(60, "days");
    const end = onboardingDate.clone().subtract(1, "days");

    return querySteps(start, end, { disableUserEntries: false });
};

export const queryHistoricalMeditationData = async (
    onboardingDate: Moment,
    userFeature: { [name: string]: boolean }
) => {
    const start = onboardingDate.clone().subtract(60, "days");
    const end = onboardingDate.clone().subtract(1, "days");

    return queryMindfulSessions(start.format(), end.format(), userFeature);
};
