import { GetMobileHints_getMobileHints, Hint } from "@graphql/_core/schema";
export const UPDATE_HINTS_SUCCESS = "UPDATE_HINTS_SUCCESS";
export const CYCLE_HINT = "CYCLE_HINT";

export const updateHintsSuccess = (payload: GetMobileHints_getMobileHints[]) => ({
  payload,
  type: UPDATE_HINTS_SUCCESS,
});

export const cycleHint = (payload: { shownHint: Hint }) => ({
  payload,
  type: CYCLE_HINT,
});
