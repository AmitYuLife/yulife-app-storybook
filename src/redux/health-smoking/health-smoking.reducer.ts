import { createReducer } from "@reduxjs/toolkit";
import { updateHealthSmokingStateAction, updateSmokingEditableFieldsAction } from "./health-smoking.actions";
import { HealthSmokingState } from "./health-smoking.types";

export interface IHealthSmokingStore {
  smokingState?: HealthSmokingState;
}

export const getInitialState = (): IHealthSmokingStore => ({
  smokingState: null,
});

export const healthSmokingReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(updateHealthSmokingStateAction, (state, action) => updateHealthSmokingState(state, action.payload));
  builder.addCase(updateSmokingEditableFieldsAction, (state, action) =>
    updateSmokingEditableFields(state, action.payload)
  );
  builder.addDefaultCase((state) => state);
});

const updateHealthSmokingState = (state: IHealthSmokingStore, payload: HealthSmokingState) => {
  return {
    ...state,
    smokingState: payload,
  };
};

const updateSmokingEditableFields = (
  state: IHealthSmokingStore,
  payload: Partial<Pick<HealthSmokingState, "triggers" | "reasons">>
) => {
  return {
    ...state,
    smokingState: {
      ...state?.smokingState,
      triggers: payload.triggers ?? state?.smokingState?.triggers ?? [],
      reasons: payload.reasons ?? state?.smokingState?.reasons ?? [],
    },
  };
};

export default healthSmokingReducer;
