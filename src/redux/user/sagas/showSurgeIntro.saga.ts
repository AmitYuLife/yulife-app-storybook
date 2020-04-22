import { getMeditationExchangeRate } from "@redux/daily-meditation/daily-meditation.selectors";
import { getExchangeRate } from "@redux/daily-steps/daily-steps.selectors";
import { pathOr } from "@services/utils";
import { put, select, take } from "redux-saga/effects";
import { GET_USER_SUCCESS, getUserSuccess, setShowSurgeIntro } from "../user.actions";
import { getUserFeatures } from "../user.selectors";

export default function* showSurgeIntroSaga() {
  while (true) {
    // get initial rates on set of main root
    const cachedExchangeRate = yield select(getExchangeRate);
    const cachedStepsSurgeMultiplier = cachedExchangeRate.surge || 1;
    const cachedMeditationExchangeRate = yield select(getMeditationExchangeRate);
    const cachedMeditationSurgeMultiplier = cachedMeditationExchangeRate.surge || 1;

    // get next user success to check if surge is in progress
    const { payload }: ReturnType<typeof getUserSuccess> = yield take(GET_USER_SUCCESS);
    const features = yield select(getUserFeatures);

    const hasShowSurgeFeature = !!(features && features.showSurge);
    const hasPassiveMeditation = !!(features && features.usePassiveMeditation);

    const stepsSurgeMultiplier = pathOr(payload, "getCurrentUser.passiveSteps.exchange.surge", 1);
    const meditationSurgeMultiplier = pathOr(payload, "getCurrentUser.passiveMeditation.exchange.surge", 1);

    if (hasShowSurgeFeature) {
      if (
        hasPassiveMeditation &&
        meditationSurgeMultiplier !== cachedMeditationSurgeMultiplier &&
        meditationSurgeMultiplier > 1
      ) {
        yield put(
          setShowSurgeIntro({
            visibility: true,
            activity: "meditation",
            rate: meditationSurgeMultiplier,
          })
        );
      } else if (stepsSurgeMultiplier !== cachedStepsSurgeMultiplier && stepsSurgeMultiplier > 1) {
        yield put(
          setShowSurgeIntro({
            visibility: true,
            activity: "steps",
            rate: stepsSurgeMultiplier,
          })
        );
      }
    }
  }
}
