import { AsyncAction, SyncAction } from "@app/redux/_core/types";
import { ConnectionInfo } from "react-native";
import { PedometerResponse } from "react-native-fitkit";

export const enum EVENT {
    CONNECTION_INFO_CHANGED = "CONNECTION_INFO_CHANGED",
    LOCATION_CHANGED = "LOCATION_CHANGED",
    PEDOMETER_EVENT = "PEDOMETER_EVENT",
    REDUX_EVENT = "REDUX_EVENT",
    FITKIT_AUTHORISED = "FITKIT_AUTHORISED"
}

export interface IEventWithPayload {
    name: EVENT;
    payload?: {};
}

export interface IFitkitAuthorised extends IEventWithPayload {
    name: EVENT.FITKIT_AUTHORISED;
    payload?: null;
}

export interface IConnectionInfoChanged extends IEventWithPayload {
    name: EVENT.CONNECTION_INFO_CHANGED;
    payload: ConnectionInfo;
}
export interface ILocationChanged extends IEventWithPayload {
    name: EVENT.LOCATION_CHANGED;
    payload: {
        long: number;
        lat: number;
    };
}

export interface IPedometerEvent extends IEventWithPayload {
    name: EVENT.PEDOMETER_EVENT;
    payload: PedometerResponse;
}

export interface IReduxEvent extends IEventWithPayload {
    name: EVENT.REDUX_EVENT;
    payload: SyncAction | AsyncAction;
}

export type MockedEvent =
    IConnectionInfoChanged |
    ILocationChanged |
    IPedometerEvent |
    IReduxEvent |
    IFitkitAuthorised;
