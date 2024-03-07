import { createAction } from "@reduxjs/toolkit";
import { IGetHintsSuccessPayload, IHint } from "./hints.types";
export const UPDATE_HINTS_SUCCESS = "UPDATE_HINTS_SUCCESS";
export const CYCLE_HINT = "CYCLE_HINT";

export const updateHintsSuccess = createAction<IGetHintsSuccessPayload>(UPDATE_HINTS_SUCCESS);

export const cycleHint = createAction<{ shownHint: IHint }>(CYCLE_HINT);
