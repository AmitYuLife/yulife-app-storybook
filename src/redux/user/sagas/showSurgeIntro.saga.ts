import { getMeditationExchangeRate } from "@redux/daily-meditation/daily-meditation.selectors";
import { getExchangeRate } from "@redux/daily-steps/daily-steps.selectors";
import { pathOr } from "@services/utils";
import { put, select, take } from "redux-saga/effects";
import { GET_USER_SUCCESS, getUserSuccess, setShowSurgeIntro } from "../user.actions";
import { getUserFeatures } from "../user.selectors";

export default function* showSurgeIntroSaga() {
    while (true) {
        // get initial rates on set of main root
        const oldExchangeRate = yield select(getExchangeRate);
        const oldMeditationExchangeRate = yield select(getMeditationExchangeRate);
        // get next user success to check if surge is in progress
        const { payload }: ReturnType<typeof getUserSuccess> = yield take(GET_USER_SUCCESS);
        const features = yield select(getUserFeatures);

        const hasShowSurgeFeature = !!(features && features.showSurge);
        const hasPassiveMeditation = !!(features && features.usePassiveMeditation);

        const currentStepsExchangeRate = pathOr(payload, "getCurrentUser.passiveSteps.exchange.yucoin", 1);
        const currentMeditationExchangeRate = pathOr(payload, "getCurrentUser.passiveMeditation.exchange.yucoin", 1);

        // If we don't want to show the tooltip, we want isMainSurge to be true from the DB
        const isStepsMainSurge = pathOr(payload, "getCurrentUser.passiveSteps.isMainSurge", false);
        const isMeditationMainSurge = pathOr(payload, "getCurrentUser.passiveMeditation.isMainSurge", false);

        if (hasShowSurgeFeature || hasPassiveMeditation) {
            if (
                ((currentStepsExchangeRate === 2 && isStepsMainSurge) || currentStepsExchangeRate === 1) &&
                currentMeditationExchangeRate >= 2 &&
                !isMeditationMainSurge &&
                oldMeditationExchangeRate.yucoin !== currentMeditationExchangeRate
            ) {
                yield put(
                    setShowSurgeIntro({
                        visibility: true,
                        activity: "meditation",
                        rate: currentMeditationExchangeRate
                    })
                );
            } else if (
                currentStepsExchangeRate >= 2 &&
                !isStepsMainSurge &&
                currentMeditationExchangeRate >= 2 &&
                !isMeditationMainSurge &&
                currentStepsExchangeRate === currentMeditationExchangeRate &&
                (oldExchangeRate.yucoin !== currentStepsExchangeRate ||
                    oldMeditationExchangeRate.yucoin !== currentMeditationExchangeRate)
            ) {
                yield put(
                    setShowSurgeIntro({
                        visibility: true,
                        activity: "all",
                        rate: currentStepsExchangeRate
                    })
                );
            } else if (
                currentStepsExchangeRate >= 2 &&
                oldExchangeRate.yucoin !== currentStepsExchangeRate &&
                !isStepsMainSurge &&
                currentMeditationExchangeRate === 1
            ) {
                yield put(
                    setShowSurgeIntro({
                        visibility: true,
                        activity: "steps",
                        rate: currentStepsExchangeRate
                    })
                );
            }
        }
    }
}
