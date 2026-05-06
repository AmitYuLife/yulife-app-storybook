import { SampleQueryResult } from "@yu-life/react-native-fitkit";
import { IUserStore } from "@redux/user/user.types";
import { Moment } from "moment";
import { FitKitType, ChallengesPayload } from "@graphql/__generated";
import { IFeature } from "@redux/user/user.types";

export type AggregatedQueryArgs = {
  start: Moment;
  end: Moment;
  fitKitTypes: FitKitType[];
  timeRange: TimeRange;
  aggregationType: AggregationType;
  blackListApps?: string[];
  features: IUserStore["features"];
  metaData?: Record<string, string>;
};

export type FitKitSampleType<T extends boolean> = {
  startTime: string;
  endTime: string;
  fitKitTypes: FitKitType[];
  features: IUserStore["features"];
  rawData?: T;
  metaData?: Record<string, string>;
};

export type GenericFitKitResponseType<T extends boolean> = T extends true
  ? QueryFitKitByTypesRawResponse
  : QueryFitKitByTypesResponse;

export type FitKitState = {
  available: boolean;
  authorised: boolean;
  loading: boolean;
};

export interface QueryFitKitByTypesResponse {
  results: ChallengesPayload[];
  error: boolean | string;
  errorUserInfo?: Record<string, unknown>;
}
export interface QueryFitKitByTypesRawResponse {
  // TODO: create common type for sample and aggregated
  results: SampleQueryResult[];
  error: boolean | string;
  errorUserInfo?: Record<string, unknown>;
}

export enum AggregationType {
  ActivitySegment = "ActivitySegment",
  ActivityType = "ActivityType",
  Session = "Session",
  Time = "Time",
}

export enum TimeRange {
  DAYS = "days",
  HOURS = "hours",
  MINUTES = "minutes",
  SECONDS = "seconds",
  MILLISECONDS = "ms",
}

export interface IFetchActivityRequest {
  features: IFeature;
  start: Moment;
  end: Moment;
  stepsBlackListApps: string[];
}
