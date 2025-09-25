import { createAction } from "@reduxjs/toolkit";

export const DISMISS_STREAK_MODAL = "DISMISS_STREAK_MODAL";

export const dismissStreakModal = createAction(DISMISS_STREAK_MODAL);
