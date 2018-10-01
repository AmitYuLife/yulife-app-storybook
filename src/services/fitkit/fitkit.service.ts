import moment from "moment";
import RNFitKit, {
    // AggregateQueryResult,
    FitKitTypes,
    // FitKitAuthOptions,
    SampleQueryResult
} from "react-native-fitkit";
import { ChallengePayload } from "../../graphql/_core/schema";

// const transformQueryResultToPayload = (item: AggregateQueryResult): ActionPayload => ({
//     startTime: Math.round(item.startTime),
//     endTime: Math.round(item.endTime),
//     value: Math.round(item.steps),
// });

const transformSampleResultToPayload = (item: SampleQueryResult & { duration: number }): ChallengePayload => ({
    endDateTime: moment(item.endTime).format(),
    startDateTime: moment(item.startTime).format(),
    value: item.duration
});

// export const isFitKitAvailable = async (): Promise<boolean> => {
//     return await RNFitKit.isAvailable();
// };

// export const fetchUncountedSteps = async (lastUpdated: number): Promise<ActionPayload[]> => {
//     try {
//         const authorised = await RNFitKit.authorise({
//             read: [
//                 Types.Steps,
//             ],
//         });

//         if (authorised) {
//             const endTime = moment().endOf("day").unix();
//             const results = await RNFitKit.aggregateQuery({
//                 startTime: moment.unix(lastUpdated).startOf("day").unix(),
//                 endTime,
//                 sampleType: Types.Steps,
//                 aggregateBy: {
//                     type: AggregateType.Time,
//                     bucketSize: { value: 1, type: TimeRange.DAYS },
//                 },
//             });

//             if (results.length === 0) {
//                 return [{
//                     startTime: moment().startOf("day").unix(),
//                     endTime,
//                     value: 0,
//                 }];
//             }

//             return results.map(transformQueryResultToPayload);
//         }
//     } catch (e) {
//         console.log(e);
//     }
// };

// export const fetchStepHistory = async (days = 7): Promise<ActionPayload[]> => {
//     const startTime = moment().subtract(days, "days").startOf("day").unix();
//     const endTime = moment().endOf("day").unix();

//     try {
//         const authorised = await RNFitKit.authorise({
//             read: [
//                 Types.Steps,
//             ],
//         });

//         if (authorised) {
//             const results = await RNFitKit.aggregateQuery({
//                 startTime,
//                 endTime,
//                 sampleType: Types.Steps,
//                 aggregateBy: {
//                     type: AggregateType.Time,
//                     bucketSize: { value: 1, type: TimeRange.DAYS },
//                 },
//             });

//             if (results.length === 0) {
//                 return [{
//                     startTime: moment().startOf("day").unix(),
//                     endTime,
//                     value: 0,
//                 }];
//             }

//             return results.map(transformQueryResultToPayload);
//         }
//     } catch (e) {
//         console.log(e);
//     }
// };

export const queryMindfulSessions = async (startTime: string): Promise<ChallengePayload[]> => {
    try {
        const authorised = await RNFitKit.authorise({
            read: [
                FitKitTypes.Types.Mindfulness
            ]
        });

        if (authorised) {
            const endTime = moment().endOf("day").toISOString();
            const results = await RNFitKit.sampleQuery({
                endTime,
                sampleType: FitKitTypes.Types.Mindfulness,
                startTime
            });

            return results.map(transformSampleResultToPayload);
        }
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
};

// export const testLiveQuery = (sampleType: string) => {
//     // tslint:disable-next-line
//     RNFitKit.addListener("testing", (result: any) => {
//         console.log("result", result);
//     });

//     RNFitKit.liveQuery({
//         sampleType,
//     });
// };
