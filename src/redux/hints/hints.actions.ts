import { IHint } from "./hints.types";
export const UPDATE_HINTS_SUCCESS = "UPDATE_HINTS_SUCCESS";
export const CYCLE_HINT = "CYCLE_HINT";

export const updateHintsSuccess = (payload: IHint[]) => ({
  payload,
  type: UPDATE_HINTS_SUCCESS,
});

export const cycleHint = (payload: { shownHint: IHint }) => ({
  payload,
  type: CYCLE_HINT,
});
