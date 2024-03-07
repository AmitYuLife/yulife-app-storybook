import { createAction } from "@reduxjs/toolkit";
import { DailyPension } from "./daily-pension.types";

export const UPDATE_DAILY_PENSION_SUCCESS = "UPDATE_DAILY_PENSION_SUCCESS";

export const updateDailyPensionSuccess = createAction<DailyPension>(UPDATE_DAILY_PENSION_SUCCESS);
