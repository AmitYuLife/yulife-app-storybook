import moment, { Moment } from "moment";
import { ChallengesPayload, PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import { fitkitTypeToGqlType } from "../cast/fitkitTypes";
import { QueryFitKitByTypesResponse } from "../fitkit.types";

export const processResult = (
  response: QueryFitKitByTypesResponse,
  type: string,
  start: Moment,
  end: Moment,
  bucketSize: moment.unitOfTime.DurationConstructor = "day"
): ChallengesPayload[] => {
  if (response.error) {
    return [];
  }

  if (response?.results?.length === 0) {
    return emptyAggregatedData(start.format(), end.format(), type, bucketSize);
  }

  return sampleDataToAggregatedData(start.format(), end.format(), response.results, bucketSize);
};

interface ChallengesPayloadWithInApp extends ChallengesPayload {
  isInApp?: boolean;
}

function sampleDataToAggregatedData(
  startTime: string,
  endTime: string,
  results: ChallengesPayloadWithInApp[],
  bucketSize: moment.unitOfTime.DurationConstructor
): ChallengesPayload[] {
  const buckets = getBuckets(startTime, endTime, bucketSize);

  return buckets.map(({ end, start }) => {
    let value = 0;
    let startDateTime = start.format();
    let endDateTime = end.format();

    const bundleIdentifiers: Set<string> = new Set();
    results.forEach((element: ChallengesPayloadWithInApp) => {
      if (
        (moment(element.startDateTime).isSameOrAfter(start) && moment(element.startDateTime).isSameOrBefore(end)) ||
        element?.isInApp
      ) {
        value = value + element.value;
        element.bundleIdentifiers?.map((bundle) => bundleIdentifiers.add(bundle));
        if (element?.isInApp) {
          startDateTime = element.startDateTime;
          endDateTime = element.endDateTime;
          delete element.isInApp;
        }
      }
    });

    const type = results[0].type;
    return {
      startDateTime,
      endDateTime,
      value,
      type,
      bundleIdentifiers: Array.from(bundleIdentifiers),
    };
  });
}

function emptyAggregatedData(
  startTime: string,
  endTime: string,
  dataType: string | PassiveChallengeType,
  bucketSize: moment.unitOfTime.DurationConstructor
): ChallengesPayload[] {
  const buckets = getBuckets(startTime, endTime, bucketSize);

  // TODO: type is either fitkit type (fitkit) or PassiveChallengeType (yuhealth)
  // This can be removed when the switch is made
  const isPassiveType = Object.values(PassiveChallengeType).includes(dataType as PassiveChallengeType);
  const activityType = isPassiveType ? (dataType as PassiveChallengeType) : fitkitTypeToGqlType(dataType);

  return buckets.map(({ end, start }) => ({
    startDateTime: start.format(),
    endDateTime: end.format(),
    value: 0,
    type: activityType,
  }));
}

const getBuckets = (startTime: string, endTime: string, bucketSize: moment.unitOfTime.DurationConstructor = "day") => {
  const buckets: { end: Moment; start: Moment }[] = [];
  const rangeEnd = moment(endTime);
  for (let start = moment(startTime); start.isBefore(rangeEnd); start.add(1, bucketSize)) {
    buckets.push({
      start: start.clone(),
      end: start.clone().endOf(bucketSize),
    });
  }

  return buckets;
};
