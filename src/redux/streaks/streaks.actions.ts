import { SyncAction } from "../_core/types";

export const DISPLAY_STREAKS_FIRST = "DISPLAY_STREAKS_FIRST";
export const DISPLAY_STREAKS_COMPLETED = "DISPLAY_STREAKS_COMPLETED";

export const displayStreaksFirstAction = (): SyncAction => ({
    type: DISPLAY_STREAKS_FIRST
});

export const displayStreaksCompletedAction = (): SyncAction => ({
    type: DISPLAY_STREAKS_COMPLETED
});
