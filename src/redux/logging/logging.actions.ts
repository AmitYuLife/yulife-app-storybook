import { SyncAction } from "../_core/types";

export const DAILY_STEPS_COIN_CLICKED = "DAILY_STEPS_COIN_CLICKED";
export const VIEW_LEADERBOARD_SCREEN = "VIEW_LEADERBOARD_SCREEN";

export const dailyStepsCoinClicked = (): SyncAction => ({
  type: DAILY_STEPS_COIN_CLICKED,
});

interface ViewLeaderboardScreenPayload {
  newId: string;
}

export const viewLeaderboardScreen = (payload: ViewLeaderboardScreenPayload): SyncAction => ({
  payload,
  type: VIEW_LEADERBOARD_SCREEN,
});
