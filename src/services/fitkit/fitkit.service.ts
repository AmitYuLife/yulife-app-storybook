import moment from "moment";
import RNFitKit, { FitKitTypes, SampleQueryResult } from "react-native-fitkit";
import { ChallengePayload } from "../../graphql/_core/schema";

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
