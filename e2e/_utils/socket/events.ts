import { AsyncAction, SyncAction } from "@app/redux/_core/types";
import { HealthDataType, IAggregateQueryResponse, ISampleQueryResponse } from "@yu-life/react-native-yu-health";

export enum EVENT {
  FITKIT_AUTHORISED = "FITKIT_AUTHORISED",
  PEDOMETER_EVENT = "PEDOMETER_EVENT",
  REDUX_EVENT = "REDUX_EVENT",
  SAMPLE_QUERIES_ADD = "SAMPLE_QUERIES_ADD",
  AGGREGATE_QUERIES_ADD = "AGGREGATE_QUERIES_ADD",
  NATIVE_EVENT = "NATIVE_EVENT",
  DETOX_LOGIN_WITH_CREDS = "DETOX_LOGIN_WITH_CREDS",
}

export interface EventWithPayload {
  name: EVENT;
  payload?: {};
}

export interface FitkitAuthorised extends EventWithPayload {
  name: EVENT.FITKIT_AUTHORISED;
  payload: boolean;
}

export interface PedometerResponse {
  startTime: string;
  endTime: string;
  steps: number;
  stepsBeforeSubscribe?: number;
}

export interface PedometerEvent extends EventWithPayload {
  name: EVENT.PEDOMETER_EVENT;
  payload: PedometerResponse;
}

export interface ReduxEvent extends EventWithPayload {
  name: EVENT.REDUX_EVENT;
  payload: SyncAction | AsyncAction;
}

export type WithDataType<T> = T & { dataType: HealthDataType };


export interface SampleQueriesAdd extends EventWithPayload {
  name: EVENT.SAMPLE_QUERIES_ADD;
  payload: WithDataType<ISampleQueryResponse>[];
}

export interface AggregateQueriesAdd extends EventWithPayload {
  name: EVENT.AGGREGATE_QUERIES_ADD;
  payload: WithDataType<IAggregateQueryResponse>[];
}

export type MockedEvent =
  | FitkitAuthorised
  | PedometerEvent
  | ReduxEvent
  | SampleQueriesAdd
  | AggregateQueriesAdd;
