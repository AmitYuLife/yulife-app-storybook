import { MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { Navigation } from "@navigation/main";
import { call, select, take, delay, race, put } from "redux-saga/effects";
import { getModalState, getRouteState } from "../../app/app.selectors";
import { GET_USER_ACTIVE_STREAK_SUCCESS, GET_USER_SUCCESS } from "../../user/user.actions";
import { getUserFeatures } from "../../user/user.selectors";
import { getStreaks } from "../streaks.selectors";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

export default function* showStreakOnChallengeCompleteSaga() {
  const streaksBeforeUpdate: ReturnType<typeof getStreaks> = yield select(getStreaks);

  yield race({
    userSuccess: take(GET_USER_SUCCESS),
    streakSuccess: take(GET_USER_ACTIVE_STREAK_SUCCESS),
  });

  const streaks: ReturnType<typeof getStreaks> = yield select(getStreaks);
  const activeModal: ReturnType<typeof getModalState> = yield select(getModalState);
  const activeRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  if (features.loggingEnabled) {
    yield put(
      logMixpanelEventActionCreator("app_debug", {
        name: "show_streak_modal_attempt",
        streaksBeforeUpdate,
        streaks,
        activeModal,
        activeRoute,
        showStreaks: features.showStreaks,
      })
    );
  }

  if (
    features.showStreaks &&
    streaksBeforeUpdate.currentStreak !== streaks.currentStreak &&
    activeModal !== MODALS.streaks
  ) {
    if (activeModal === MODALS.chest || activeRoute === ROUTES.sudokuGame) {
      yield delay(4000);
    }

    yield call(showModal, streaks);
  }
}

export function showModal(streaks: ReturnType<typeof getStreaks>) {
  showYuModal({
    component: {
      id: MODALS.streaks,
      name: MODALS.streaks,
      passProps: {
        isDoneToday: true,
        onPressCtaPrimary: () => {
          Navigation.dismissModal(MODALS.streaks);
        },
        onPressCtaSecondary: null,
        reward: streaks.reward,
        type: streaks.type,
        streakCompleted: streaks.currentStreak,
        streakMax: streaks.maxStreak,
        nextStreakAvailableAt: streaks.nextStreakAvailableAt,
      },
    },
  });
}
