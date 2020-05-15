import { PedometerResponse }  from "react-native-fitkit";
import { AsyncAction, SyncAction } from "@app/redux/_core/types";

export enum EVENT {
    FITKIT_AUTHORISED = "FITKIT_AUTHORISED",
    PEDOMETER_EVENT = "PEDOMETER_EVENT",
    REDUX_EVENT = "REDUX_EVENT",
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

export type MockedEvent = FitkitAuthorised | PedometerEvent | ReduxEvent;
