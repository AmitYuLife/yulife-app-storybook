import {
  AggregateQueryResult,
  PedometerResponse,
  SampleQueryResult,
} from "@yu-life/react-native-fitkit";
import { AsyncAction, SyncAction } from "@app/redux/_core/types";

export enum EVENT {
  FITKIT_AUTHORISED = "FITKIT_AUTHORISED",
  PEDOMETER_EVENT = "PEDOMETER_EVENT",
  REDUX_EVENT = "REDUX_EVENT",
  FITKIT_SAMPLE_QUERIES_ADD = "FITKIT_SAMPLE_QUERIES_ADD",
  FITKIT_AGGREGATED_QUERIES_ADD = "FITKIT_AGGREGATED_QUERIES_ADD",
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

export interface PedometerEvent extends EventWithPayload {
  name: EVENT.PEDOMETER_EVENT;
  payload: PedometerResponse;
}

export interface ReduxEvent extends EventWithPayload {
  name: EVENT.REDUX_EVENT;
  payload: SyncAction | AsyncAction;
}

export interface FitkitSampleQueriesAdd extends EventWithPayload {
  name: EVENT.FITKIT_SAMPLE_QUERIES_ADD;
  payload: SampleQueryResult[];
}

export interface FitkitAggregatedQueriesAdd extends EventWithPayload {
  name: EVENT.FITKIT_AGGREGATED_QUERIES_ADD;
  payload: AggregateQueryResult[];
}

export type MockedEvent =
  | FitkitAuthorised
  | PedometerEvent
  | ReduxEvent
  | FitkitSampleQueriesAdd
  | FitkitAggregatedQueriesAdd;
