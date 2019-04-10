import { MODALS } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { delay } from "redux-saga";
import { call, select, take } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";
import { GET_USER_SUCCESS } from "../../user/user.actions";
import { getUserFeatures } from "../../user/user.selectors";
import { getStreaks } from "../streaks.selectors";

export default function* showStreakOnChallengeCompleteSaga() {
    const streaksBeforeUpdate = yield select(getStreaks);

    yield take(GET_USER_SUCCESS);

    const streaks = yield select(getStreaks);
    const currentRoute = yield select(getRouteState);
    const features = yield select(getUserFeatures);

    if (
        features.showStreaks &&
        streaksBeforeUpdate.currentStreak !== streaks.currentStreak &&
        currentRoute !== MODALS.streaks
    ) {
        if (currentRoute === MODALS.chest) {
            yield call(delay, 4000);
        }
        yield call(() =>
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
                        streakCompleted: streaks.currentStreak,
                        streakMax: streaks.maxStreak,
                        nextStreakAvailableAt: streaks.nextStreakAvailableAt
                    }
                }
            })
        );
    }
}
