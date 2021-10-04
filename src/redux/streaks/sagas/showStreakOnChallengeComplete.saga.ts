import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { Navigation } from "react-native-navigation";
import { call, select, take, delay } from "redux-saga/effects";
import { getModalState } from "../../app/app.selectors";
import { GET_USER_SUCCESS } from "../../user/user.actions";
import { getUserFeatures } from "../../user/user.selectors";
import { getStreaks } from "../streaks.selectors";

export default function* showStreakOnChallengeCompleteSaga() {
  const streaksBeforeUpdate: ReturnType<typeof getStreaks> = yield select(getStreaks);

  yield take(GET_USER_SUCCESS);

  const streaks: ReturnType<typeof getStreaks> = yield select(getStreaks);
  const activeModal: ReturnType<typeof getModalState> = yield select(getModalState);
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  if (
    features.showStreaks &&
    streaksBeforeUpdate.currentStreak !== streaks.currentStreak &&
    activeModal !== MODALS.streaks
  ) {
    if (activeModal === MODALS.chest) {
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
