import { GetCurrentUser_getDailyPensionContribution as DailyPension } from "@graphql/_core/schema";
export const UPDATE_DAILY_PENSION = "UPDATE_DAILY_PENSION";

export const updateDailyPension = (payload: DailyPension) => ({
  payload,
  type: UPDATE_DAILY_PENSION,
});
