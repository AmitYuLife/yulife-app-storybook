export { FitKitTypes } from "@yu-life/react-native-fitkit";
import {
  SampleQueryResult,
  SampleQueryOptions,
  PedometerResponse,
  AggregateQueryOptions,
  AggregateQueryResult,
} from "@yu-life/react-native-fitkit";
import service from "@yu-life/react-native-fitkit";
import moment from "moment";
import socket from "@services/socket";

const steps = [] as PedometerResponse[];
let sampleQueries = [] as SampleQueryResult[];
let aggregatedQueries = [] as AggregateQueryResult[];

socket.onSampleQueriesAdded((newQueries) => {
  sampleQueries = [...sampleQueries, ...newQueries];
});

socket.onAggregatedQueriesAdded((newQueries) => {
  aggregatedQueries = [...aggregatedQueries, ...newQueries];
});

socket.onPedometerEvent((step) => steps.push(step));

export default {
  ...service,
  queryPedometerFromDate: async (startTime: string, endTime?: string) => {
    return steps.reduce(
      (step, total) => ({
        ...total,
        steps: step.steps + total.steps,
      }),
      { startTime, endTime, steps: 0 }
    );
  },
  aggregateQuery: async (options: AggregateQueryOptions): Promise<AggregateQueryResult[]> => {
    return aggregatedQueries.filter(
      (result) =>
        moment(result.startTime).isAfter(moment(options.startTime)) &&
        moment(result.endTime).isBefore(moment(options.endTime)) &&
        options.types.map((type) => type.toString()).includes(result.type)
    );
  },
  sampleQuery: async (opts: SampleQueryOptions): Promise<SampleQueryResult[]> => {
    return sampleQueries.filter(
      (result) =>
        moment(result.startTime).isAfter(moment(opts.startTime)) &&
        moment(result.endTime).isBefore(moment(opts.endTime)) &&
        opts.type.toString() === result.type
    );
  },
};
