import { GetActivityHistory_getActivityHistoryWithLevels_sources as Sources } from "@graphql/_core/schema";
import { ChallengesPayload, PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import { IFeature } from "@redux/user/user.reducer";
import { ItemProps } from "@screens/member/activity-history-levels/activity-history-levels.item";
import {
  getAggregationCyclingConfiguration,
  getAggregationStepCountConfiguration,
  getMindfulSessionFitKitTypes,
} from "@services/fitkit/fitkit.config";
import { queryFitKitAggregatedData, queryFitKitSampleData } from "@services/fitkit/fitkit.helpers";
import { processResult, processYuHealthResult } from "@services/fitkit/helpers/sampleToAggregatedData";
import { yuHealthAggregateQuery } from "@services/fitkit/yu-health.helpers";
import { DATE_FORMAT_WITH_TZ } from "@utils";
import { BucketSize, HealthDataType } from "@yu-life/react-native-yu-health";
import { Moment } from "moment";

export interface IFormattedDatesByMonth {
  title: string;
  items: ItemProps[];
}

export function groupDatesByMonth(dates: ItemProps[]) {
  // dates return undefined sometimes on first run which crashes the app
  return dates && dates.length
    ? dates.reduce((accumulator: IFormattedDatesByMonth[], curr) => {
        const index = accumulator.findIndex((value) => value.title === curr.monthAndYear);
        if (index !== -1) {
          accumulator[index].items.push(curr);
        } else {
          accumulator.push({
            title: curr.monthAndYear,
            items: [curr],
          });
        }

        return accumulator;
      }, [])
    : [];
}

export function countSources(sources: Partial<Sources>) {
  if (!sources.garmin && !sources.fitbit && !sources.strava && !sources.withings) {
    return 0;
  }

  let sourceCount = 0;
  for (const source in sources) {
    if (
      sources[source as keyof Sources] !== null &&
      sources[source as keyof Sources] !== 0 &&
      source !== "__typename"
    ) {
      sourceCount += 1;
    }
  }

  return sourceCount;
}

export const fetchFitkitActivityData = async ({ start, end, features, stepsBlackListApps }: IFetchActivityRequest) => {
  const metaData = { file: "activity-history.container" };
  const cyclingConfig = getAggregationCyclingConfiguration(features);
  const stepsConfig = getAggregationStepCountConfiguration(stepsBlackListApps);

  const [steps, meditation, cycling] = await Promise.all([
    queryFitKitAggregatedData({ start, end, features, metaData, ...stepsConfig }),
    queryFitKitSampleData({
      startTime: start.format(DATE_FORMAT_WITH_TZ),
      endTime: end.format(DATE_FORMAT_WITH_TZ),
      fitKitTypes: getMindfulSessionFitKitTypes(),
      features,
      metaData,
    }),
    queryFitKitAggregatedData({ start, end, features, metaData, ...cyclingConfig }),
  ]);

  const stepsResults = processResult(steps, "StepCount", start, end);
  const meditationResults = processResult(meditation, "MindfulSession", start, end);
  const cyclingResults = processResult(cycling, "Biking", start, end);

  return { stepsResults, meditationResults, cyclingResults };
};

export interface IFetchActivityResponse {
  stepsResults: ChallengesPayload[];
  meditationResults: ChallengesPayload[];
  cyclingResults: ChallengesPayload[];
}

export const fetchYuHealthActivityData = async ({
  start,
  features,
  end,
  stepsBlackListApps,
}: IFetchActivityRequest): Promise<IFetchActivityResponse> => {
  const sharedOptions = {
    startTime: start.toDate(),
    endTime: end.toDate(),
    bucketConfig: {
      value: 1,
      unit: BucketSize.day,
    },
    queryOptions: { blacklistApps: stepsBlackListApps },
  };

  const [yuHealthSteps, yuHealthMeditation, yuHealthCycling] = await Promise.all([
    yuHealthAggregateQuery({
      features,
      metadata: { file: "activity-history.container" },
      params: { ...sharedOptions, dataType: HealthDataType.steps },
    }),
    yuHealthAggregateQuery({
      features,
      metadata: { file: "activity-history.container" },
      params: { ...sharedOptions, dataType: HealthDataType.mindfulMinutes },
    }),
    yuHealthAggregateQuery({
      features,
      metadata: { file: "activity-history.container" },
      params: { ...sharedOptions, dataType: HealthDataType.cyclingDistance },
    }),
  ]);

  const stepsResults = processYuHealthResult(yuHealthSteps, start, end, PassiveChallengeType.STEPS);
  const meditationResults = processYuHealthResult(yuHealthMeditation, start, end, PassiveChallengeType.MEDITATION);
  const cyclingResults = processYuHealthResult(yuHealthCycling, start, end, PassiveChallengeType.CYCLING);

  return { stepsResults, meditationResults, cyclingResults };
};

interface IFetchActivityRequest {
  features: IFeature;
  start: Moment;
  end: Moment;
  stepsBlackListApps: string[];
}

export const fetchActivityData = async ({ features, stepsBlackListApps, start, end }: IFetchActivityRequest) => {
  if (!features.tempGameEnableYuHealth) {
    return fetchFitkitActivityData({ features, stepsBlackListApps, start, end });
  }

  return fetchYuHealthActivityData({ features, stepsBlackListApps, start, end });
};
