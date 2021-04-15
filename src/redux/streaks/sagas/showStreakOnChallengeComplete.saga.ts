import { MODALS } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { call, select, take, delay } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";
import { GET_USER_SUCCESS } from "../../user/user.actions";
import { getUserFeatures } from "../../user/user.selectors";
import { getStreaks } from "../streaks.selectors";

export default function* showStreakOnChallengeCompleteSaga() {
  const streaksBeforeUpdate: ReturnType<typeof getStreaks> = yield select(getStreaks);

  yield take(GET_USER_SUCCESS);

  const streaks: ReturnType<typeof getStreaks> = yield select(getStreaks);
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  if (
    features.showStreaks &&
    streaksBeforeUpdate.currentStreak !== streaks.currentStreak &&
    currentRoute !== MODALS.streaks
  ) {
    if (currentRoute === MODALS.chest) {
      yield delay(4000);
    }

    yield call(showModal, streaks);
  }
}

export function showModal(streaks: ReturnType<typeof getStreaks>) {
  Navigation.showModal({
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
