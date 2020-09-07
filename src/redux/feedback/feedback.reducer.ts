import { Metric } from "@graphql/_core/schema/globalTypes";
import { SyncAction } from "@redux/_core/types";
import { DISPLAY_FEEDBACK_ON_NEXT_LOAD, DISPLAY_FEEDBACK_SUCCESS } from "./feedback.actions";

export interface IFeedbackStore {
  metric: Metric;
  display: boolean;
}

export const initialState: IFeedbackStore = {
  metric: Metric.CES,
  display: false,
};

export default function feedbackReducer(state: IFeedbackStore = initialState, action: SyncAction) {
  switch (action.type) {
    case DISPLAY_FEEDBACK_ON_NEXT_LOAD:
      return displayFeedbackOnNextLoad(state, action.payload);
    case DISPLAY_FEEDBACK_SUCCESS:
      return displayFeedbackSuccess(state);
    default:
      return state;
  }
}

// this fires after the modal has been displayed.
// we set this to ensure that it won't display the next time a user opens their app
function displayFeedbackSuccess(state: IFeedbackStore) {
  return {
    ...state,
    display: false,
  };
}

function displayFeedbackOnNextLoad(state: IFeedbackStore, payload: IFeedbackStore) {
  return {
    ...state,
    ...payload,
  };
}
