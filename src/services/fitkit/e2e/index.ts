export { FitKitTypes } from "react-native-fitkit";
import { SampleQueryResult, SampleQueryOptions, PedometerResponse } from "react-native-fitkit";
import service from "react-native-fitkit";
import moment from "moment";
import socket from "@services/socket";

// overwrite defaults here
export { default as FitKitAvailable } from "./fitkit-available";

const steps = [] as PedometerResponse[];
let sampleQueries = [] as SampleQueryResult[];

socket.onSampleQueriesAdded(newQueries => {
    sampleQueries = [
        ...sampleQueries,
        ...newQueries,
    ];
});

socket.onPedometerEvent(step => steps.push(step));

export default {
    ...service,
    queryPedometerFromDate: async (startTime: string, endTime?: string) => {
        return steps.reduce((step, total) => ({
            ...total,
            steps: step.steps + total.steps,
        }), { startTime, endTime, steps: 0 });
    },
    sampleQuery: async (opts: SampleQueryOptions): Promise<SampleQueryResult[]> => {
        return sampleQueries.filter(result => (
            moment(result.startTime).isAfter(moment(opts.startTime)) &&
            moment(result.endTime).isBefore(moment(opts.endTime)) &&
            opts.type.toString() === result.type
        )
        );
    },
};



