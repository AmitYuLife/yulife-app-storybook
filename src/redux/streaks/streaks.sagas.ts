import { MODALS, ROUTES } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { delay } from "redux-saga";
import { call, put, select, take, takeLatest } from "redux-saga/effects";
import { getRouteState } from "../app/app.selectors";
import { START_DAILY_STEPS } from "../daily-steps/daily-steps.actions";
import { getChallengesStatus } from "../levels/levels.selectors";
import { GET_USER_SUCCESS } from "../user/user.actions";
import { getUserFeatures } from "../user/user.selectors";
import { DISPLAY_STREAKS_COMPLETED, displayStreaksFirstAction } from "./streaks.actions";
import { getStreaks } from "./streaks.selectors";

function* showFirstStreakModal() {
    const streaks = yield select(getStreaks);
    const currentRoute = yield select(getRouteState);
    const features = yield select(getUserFeatures);

    if (features.showStreaks && !streaks.displayStreak && streaks.isAvailable && currentRoute !== MODALS.streaks) {
        if (!(streaks.currentStreak > 0)) {
            yield call(() =>
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
                                        visible: false
                                    },
                                    statusBar: {
                                        drawBehind: false,
                                        visible: true
                                    }
                                });
                                Navigation.dismissModal(MODALS.streaks);
                            },
                            onPressCtaSecondary: () => {
                                Navigation.dismissModal(MODALS.streaks);
                            },
                            reward: streaks.reward,
                            streakCompleted: 0,
                            streakMax: streaks.maxStreak
                        }
                    }
                })
            );
        }
        yield put(displayStreaksFirstAction());
    }
}

function* showOnChallengeComplete() {
    yield take(GET_USER_SUCCESS);

    const streaks = yield select(getStreaks);
    const currentRoute = yield select(getRouteState);
    const features = yield select(getUserFeatures);
    const { done } = yield select(getChallengesStatus);

    if (done === 1 && features.showStreaks && streaks.isAvailable && currentRoute !== MODALS.streaks) {
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
                        streakMax: streaks.maxStreak
                    }
                }
            })
        );
    }
}

export default [
    takeLatest(START_DAILY_STEPS, showFirstStreakModal),
    takeLatest(DISPLAY_STREAKS_COMPLETED, showOnChallengeComplete)
];
