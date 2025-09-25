import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { select, take, put } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";
import { GET_USER_ACTIVE_STREAK_SUCCESS } from "../../user/user.actions";
import { getUserFeatures } from "../../user/user.selectors";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { getStreaks } from "@redux/streaks/streaks.selectors";

export default function* getStreakModalDetails() {
  const streaksBeforeUpdate: ReturnType<typeof getStreaks> = yield select(getStreaks);

  yield take(GET_USER_ACTIVE_STREAK_SUCCESS);

  const streaks: ReturnType<typeof getStreaks> = yield select(getStreaks);
  const activeRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  if (features.loggingEnabled) {
    yield put(
      logMixpanelEventActionCreator("app_debug", {
        name: "show_streak_modal_attempt",
        streaksBeforeUpdate,
        streaks,
        activeRoute,
        showStreaks: features.showStreaks,
      })
    );
  }

  if (features.showStreaks && streaksBeforeUpdate.currentStreak !== streaks.currentStreak) {
    return {
      isDoneToday: true,
      onPressCtaPrimary: () => {
        Navigation.dismissModal(MODALS.streaks);
      },
      onPressCtaSecondary: null as unknown,
      reward: streaks.reward,
      type: streaks.type,
      streakCompleted: streaks.currentStreak,
      streakMax: streaks.maxStreak,
      nextStreakAvailableAt: streaks.nextStreakAvailableAt,
    };
  }
}
