import RNFitKit, { FitKitTypes, PedometerResponse, SampleQueryResult } from "@services/fitkit/fitkit.service";
import moment from "moment";
import { ChallengePayload } from "../../graphql/_core/schema";
import Logger from "../logging/logger";

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

export const queryMindfulSessions = async (startTime: string, endTime: string): Promise<ChallengePayload[]> => {
    try {
        const results = await RNFitKit.sampleQuery({
            disableUserEntries: true,
            endTime,
            startTime,
            type: FitKitTypes.Types.MindfulSession
        });

        if (results && results.length > 0) {
            Logger.logMixpanelEvent("raw_meditation_query_results", { results });
        }

        return results.map(transformSampleResultToPayload);
    } catch (e) {
        return [];
    }
};

export const querySteps = async (
    start: number | string,
    end: number
): Promise<{ results: ChallengePayload[]; error: string }> => {
    try {
        const startTime =
            typeof start === "number"
                ? moment()
                      .subtract(start, "days")
                      .startOf("day")
                      .format()
                : moment(start)
                      .startOf("day")
                      .format();
        const endTime = moment()
            .subtract(end, "days")
            .endOf("day")
            .format();
        const results = await RNFitKit.aggregateQuery({
            aggregateBy: {
                bucketSize: { value: 1, type: FitKitTypes.TimeRange.DAYS },
                type: FitKitTypes.AggregateType.Time
            },
            disableUserEntries: true,
            endTime,
            startTime,
            type: FitKitTypes.Types.StepCount
        });

        if (results && results.length > 0) {
            Logger.logMixpanelEvent("raw_steps_query_results", { results });
        }

        return { results: results.map(transformSampleResultToPayload as any), error: null };
    } catch (e) {
        return { results: [], error: e.message };
    }
};
