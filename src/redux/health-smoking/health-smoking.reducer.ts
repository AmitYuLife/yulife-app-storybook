import { createReducer } from "@reduxjs/toolkit";
import { updateHealthSmokingStateAction, updateSmokingEditableFieldsAction } from "./health-smoking.actions";
import { HealthSmokingState } from "./health-smoking.types";
import { parseJSON } from "@utils";

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
  if (typeof payload === "string") {
    const { isValid, data } = parseJSON<HealthSmokingState>(payload);

    if (!isValid) {
      return state;
    }

    return {
      ...state,
      smokingState: data,
    };
  }

  return {
    ...state,
    smokingState: payload,
  };
};

const updateSmokingEditableFields = (
  state: IHealthSmokingStore,
  payload: Partial<Pick<HealthSmokingState, "triggers" | "reasons" | "customTriggers" | "customReasons">>
) => {
  return {
    ...state,
    smokingState: {
      ...state?.smokingState,
      triggers: payload.triggers ?? state?.smokingState?.triggers ?? [],
      reasons: payload.reasons ?? state?.smokingState?.reasons ?? [],
      customTriggers: payload.customTriggers ?? state?.smokingState?.customTriggers ?? [],
      customReasons: payload.customReasons ?? state?.smokingState?.customReasons ?? [],
    },
  };
};

export default healthSmokingReducer;
