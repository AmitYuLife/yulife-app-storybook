import { createAction } from "@reduxjs/toolkit";
import { IGetHintsSuccessPayload, ICycleHintPayload } from "./hints.types";

export const UPDATE_HINTS_SUCCESS = "UPDATE_HINTS_SUCCESS";
export const CYCLE_HINT = "CYCLE_HINT";

export const updateHintsSuccess = createAction<IGetHintsSuccessPayload, typeof UPDATE_HINTS_SUCCESS>(
  UPDATE_HINTS_SUCCESS
);

export const cycleHint = createAction<ICycleHintPayload, typeof CYCLE_HINT>(CYCLE_HINT);
