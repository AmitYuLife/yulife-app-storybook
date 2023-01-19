import moment, { Moment } from "moment";
import { ChallengesPayload } from "@graphql/_core/schema/globalTypes";
import { fitkitTypeToGqlType } from "../cast/fitkitTypes";
import { QueryFitKitByTypesResponse } from "../fitkit.types";

export const processResult = (
  response: QueryFitKitByTypesResponse,
  type: string,
  start: Moment,
  end: Moment
): ChallengesPayload[] => {
  if (response.error) {
    return [];
  }

  if (response?.results?.length === 0) {
    return emptyAggregatedData(start.clone().format(), end.clone().format(), type);
  }

  return sampleDataToAggregatedData(start.clone().format(), end.clone().format(), response.results);
};

function sampleDataToAggregatedData(
  startTime: string,
  endTime: string,
  results: ChallengesPayload[]
): ChallengesPayload[] {
  const buckets = getDateBuckets(startTime, endTime);

  return buckets.map(({ end, start }) => {
    let value = 0;
    const bundleIdentifiers: Set<string> = new Set();
    results.forEach((element: ChallengesPayload) => {
      if (moment(element.startDateTime).isSameOrAfter(start) && moment(element.startDateTime).isSameOrBefore(end)) {
        value = value + element.value;
        element.bundleIdentifiers?.map((bundle) => bundleIdentifiers.add(bundle));
      }
    });

    const type = results[0].type;
    return {
      startDateTime: start.format(),
      endDateTime: end.format(),
      value,
      type,
      bundleIdentifiers: Array.from(bundleIdentifiers),
    };
  });
}

function emptyAggregatedData(startTime: string, endTime: string, type: string): ChallengesPayload[] {
  const buckets = getDateBuckets(startTime, endTime);
  return buckets.map(({ end, start }) => ({
    startDateTime: start.format(),
    endDateTime: end.format(),
    value: 0,
    type: fitkitTypeToGqlType(type),
  }));
}

const getDateBuckets = (startTime: string, endTime: string) => {
  const buckets: { end: Moment; start: Moment }[] = [];
  const rangeEnd = moment(endTime);
  for (let start = moment(startTime); start.isBefore(rangeEnd); start.add(1, "day")) {
    buckets.push({
      start: start.clone(),
      end: start.clone().endOf("day"),
    });
  }

  return buckets;
};
