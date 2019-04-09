import { MODALS } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { call, put, select } from "redux-saga/effects";
import { challengeResetSuccessAction } from "../levels.actions";
import { getActiveLevel, getChallengesStatus } from "../levels.selectors";

export default function* resetChallengeSaga() {
    const { done } = yield select(getChallengesStatus);
    const active = yield select(getActiveLevel);

    if (done < 1 && active.chest.value > 0 && active.status === "success") {
        yield call(() => {
            Navigation.showModal({
                component: {
                    id: MODALS.chest,
                    name: MODALS.chest,
                    passProps: {
                        ctaLabel: "collect",
                        heading: `you get ${active.chest.value} yucoin`,
                        isLocked: false,
                        onPressCta: () => {
                            Navigation.dismissModal(MODALS.chest);
                        }
                    }
                }
            });
        });
    }

    yield put(challengeResetSuccessAction());
}
