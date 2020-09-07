import { IFeedbackStore } from "./feedback.reducer";

export const HANDLE_FEEDBACK = "HANDLE_FEEDBACK";
export const DISPLAY_FEEDBACK_ON_NEXT_LOAD = "DISPLAY_FEEDBACK_ON_NEXT_LOAD";
export const DISPLAY_FEEDBACK = "DISPLAY_FEEDBACK";
export const DISPLAY_FEEDBACK_SUCCESS = "DISPLAY_FEEDBACK_SUCCESS";

export function handleFeedbackAction(payload: { level: number }) {
  return {
    payload,
    type: HANDLE_FEEDBACK,
  };
}

export function displayFeedbackOnNextLoadAction(payload: IFeedbackStore) {
  return {
    payload,
    type: DISPLAY_FEEDBACK_ON_NEXT_LOAD,
  };
}

export function displayFeedbackSuccessAction() {
  return {
    type: DISPLAY_FEEDBACK_SUCCESS,
  };
}
