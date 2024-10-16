import { createAction } from "@reduxjs/toolkit";

export const DISPLAY_STREAKS_COMPLETED = "DISPLAY_STREAKS_COMPLETED";
export const DISMISS_STREAK_MODAL = "DISMISS_STREAK_MODAL";

export const displayStreaksCompletedAction = createAction(DISPLAY_STREAKS_COMPLETED);
export const dismissStreakModal = createAction(DISMISS_STREAK_MODAL);
