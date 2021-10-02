import { SyncAction } from "../_core/types";

export const DISPLAY_STREAKS_COMPLETED = "DISPLAY_STREAKS_COMPLETED";

export const displayStreaksCompletedAction = (): SyncAction => ({
  type: DISPLAY_STREAKS_COMPLETED,
});
