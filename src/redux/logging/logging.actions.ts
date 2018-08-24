import { SyncAction } from "../_core/types";

export const DAILY_STEPS_COIN_CLICKED = "DAILY_STEPS_COIN_CLICKED";

export const dailyStepsCoinClicked = (): SyncAction => ({
    type: DAILY_STEPS_COIN_CLICKED,
});
