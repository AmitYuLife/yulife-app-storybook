import { MODALS, ROUTES } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { call, put, select } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";
import { getUserFeatures } from "../../user/user.selectors";
import { displayStreaksFirstAction } from "../streaks.actions";
import { getStreaks } from "../streaks.selectors";

export default function* showFirstStreakModalSaga() {
  const streaks = yield select(getStreaks);
  const currentRoute = yield select(getRouteState);
  const features = yield select(getUserFeatures);

  if (features.showStreaks && !streaks.displayStreak && streaks.isAvailable && currentRoute !== MODALS.streaks) {
    if (!(streaks.currentStreak > 0)) {
      yield call(showStreaksModal, streaks);
    }

    yield put(displayStreaksFirstAction());
  }
}

export function showStreaksModal(streaks: any) {
  Navigation.showModal({
    component: {
      id: MODALS.streaks,
      name: MODALS.streaks,
      passProps: {
        isDoneToday: false,
        onPressCtaPrimary: () => {
          Navigation.mergeOptions(ROUTES.quests, {
            bottomTabs: {
              animate: false,
              currentTabIndex: 1,
              drawBehind: true,
              visible: false,
            },
            statusBar: {
              drawBehind: false,
              visible: true,
            },
          });
          Navigation.dismissModal(MODALS.streaks);
        },
        onPressCtaSecondary: () => {
          Navigation.dismissModal(MODALS.streaks);
        },
        reward: streaks.reward,
        streakCompleted: 0,
        streakMax: streaks.maxStreak,
      },
    },
  });
}
