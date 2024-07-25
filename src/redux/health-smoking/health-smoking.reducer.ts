import { createReducer } from "@reduxjs/toolkit";
import { updateHealthSmokingStateAction } from "./health-smoking.actions";
import { HealthSmokingState } from "./health-smoking.types";

export interface IHealthSmokingStore {
  smokingState?: HealthSmokingState;
}

export const getInitialState = (): IHealthSmokingStore => ({
  smokingState: null,
});

export const healthSmokingReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(updateHealthSmokingStateAction, (state, action) => updateHealthSmokingState(state, action.payload));
  builder.addDefaultCase((state) => state);
});

const updateHealthSmokingState = (state: IHealthSmokingStore, payload: HealthSmokingState) => {
  return {
    ...state,
    smokingState: payload,
  };
};

export default healthSmokingReducer;
