import moment from "moment";
import RNFitKit, { FitKitTypes, PedometerResponse, SampleQueryResult } from "react-native-fitkit";
import { ChallengePayload } from "../../graphql/_core/schema";

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
        const response = await RNFitKit.aggregateQuery({
            aggregateBy: {
                bucketSize: { value: 1, type: FitKitTypes.TimeRange.DAYS },
                type: FitKitTypes.AggregateType.Time
            },
            disableUserEntries: true,
            endTime,
            startTime,
            type: FitKitTypes.Types.StepCount
        });

        return { results: response.map(mapPedometerResults as any), error: null };
    } catch (e) {
        return { results: [], error: e.message };
    }
};
