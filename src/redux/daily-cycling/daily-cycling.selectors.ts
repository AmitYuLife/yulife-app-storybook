import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";
import { DistanceMeasurementType } from "@redux/_core/types";

export const METER_TO_MILES = 0.000621371;
export const KM_TO_METERS = 1000;

type State = IReduxState["dailyCycling"];
const reducer = (state: IReduxState) => state.dailyCycling;

const dailyCyclingSelector = (state: State): string => {
  const dailyCycling =
    state.cyclingMeasurement === DistanceMeasurementType.Km
      ? state.dailyCycling / KM_TO_METERS
      : state.dailyCycling * METER_TO_MILES;
  return `${!dailyCycling ? 0 : dailyCycling.toFixed(1)} ${state.cyclingMeasurement}`;
};

export const getDailyCycling = createSelector(reducer, dailyCyclingSelector);

const dailyCyclingMeasurement = (state: State) => state.cyclingMeasurement;
export const getDailyCyclingMeasurement = createSelector(reducer, dailyCyclingMeasurement);
