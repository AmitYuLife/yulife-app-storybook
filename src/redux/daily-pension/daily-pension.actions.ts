import { GetCurrentUser_getDailyPensionContribution as DailyPension } from "@graphql/_core/schema";
export const UPDATE_DAILY_PENSION_SUCCESS = "UPDATE_DAILY_PENSION_SUCCESS";

export const updateDailyPensionSuccess = (payload: DailyPension) => ({
  payload,
  type: UPDATE_DAILY_PENSION_SUCCESS,
});
