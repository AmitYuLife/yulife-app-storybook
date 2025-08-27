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

// TODO: Purge this

const steps = [] as PedometerResponse[];
const sampleQueries = [] as SampleQueryResult[];
const aggregatedQueries = [] as AggregateQueryResult[];

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
