import { getMeditationExchangeRate } from "@redux/daily-meditation/daily-meditation.selectors";
import { getExchangeRate } from "@redux/daily-steps/daily-steps.selectors";
import { put, select, take } from "redux-saga/effects";
import { GET_USER_SUCCESS, getUserSuccess, setShowSurgeIntro } from "../user.actions";
import { getUserFeatures } from "../user.selectors";

export default function* showSurgeIntroSaga() {
  while (true) {
    // get initial rates on set of main root
    const cachedExchangeRate: ReturnType<typeof getExchangeRate> = yield select(getExchangeRate);
    const cachedStepsSurgeMultiplier = cachedExchangeRate.surge || 1;
    const cachedMeditationExchangeRate: ReturnType<typeof getMeditationExchangeRate> = yield select(
      getMeditationExchangeRate
    );
    const cachedMeditationSurgeMultiplier = cachedMeditationExchangeRate.surge || 1;

    // get next user success to check if surge is in progress
    const { payload }: ReturnType<typeof getUserSuccess> = yield take(GET_USER_SUCCESS);
    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

    const hasShowSurgeFeature = !!(features && features.showSurge);
    const hasPassiveMeditation = !!(features && features.usePassiveMeditation);

    const stepsSurgeMultiplier = payload?.getCurrentUser?.passiveSteps?.exchange?.surge || 1;
    const meditationSurgeMultiplier = payload?.getCurrentUser?.passiveMeditation?.exchange?.surge || 1;

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
