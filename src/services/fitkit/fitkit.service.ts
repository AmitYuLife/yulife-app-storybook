import moment from "moment";
import { PedometerResponse } from "react-native-dual-pedometer";
import RNFitKit, { FitKitTypes, SampleQueryResult } from "react-native-fitkit";
import { ChallengePayload } from "../../graphql/_core/schema";

export const mapPedometerResults = (results: PedometerResponse): ChallengePayload => ({
    endDateTime: moment(results.endTime).format(),
    startDateTime: moment(results.startTime).format(),
    value: Math.floor(results.steps)
});

export const transformSampleResultToPayload = (item: SampleQueryResult & { duration: number }): ChallengePayload => ({
    endDateTime: moment(item.endTime).format(),
    startDateTime: moment(item.startTime).format(),
    value: item.duration
});

export const queryMindfulSessions = async (startTime: string, endTime: string): Promise<ChallengePayload[]> => {
    try {
        const authorised = await RNFitKit.authorise({
            read: [FitKitTypes.Types.Mindfulness]
        });

        if (authorised) {
            const results = await RNFitKit.sampleQuery({
                endTime,
                sampleType: FitKitTypes.Types.Mindfulness,
                startTime
            });

            return results.map(transformSampleResultToPayload);
        }
    } catch (e) {
        return [];
    }
};

export const querySteps = async (
    startDays: number,
    endDays: number
): Promise<{ results: ChallengePayload[]; error: string }> => {
    try {
        const authorised = await RNFitKit.authorise({
            read: [FitKitTypes.Types.Steps]
        });

        if (authorised) {
            const startTime = moment()
                .subtract(startDays, "days")
                .startOf("day")
                .format();
            const endTime = moment()
                .subtract(endDays, "days")
                .endOf("day")
                .format();
            const response = await RNFitKit.aggregateQuery({
                aggregateBy: {
                    bucketSize: { value: 1, type: FitKitTypes.TimeRange.DAYS },
                    type: FitKitTypes.AggregateType.Time
                },
                endTime,
                sampleType: FitKitTypes.Types.Steps,
                startTime
            });

            return { results: response.map(mapPedometerResults as any), error: null };
        }
    } catch (e) {
        return { results: [], error: e.message };
    }
};
