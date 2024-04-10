import Logger from "@services/logging/logger";
import { call, select, fork, put } from "redux-saga/effects";
import { getActiveLevel, getVideoPlayerIsActive, getYuniversalProgress } from "../levels.selectors";
import setInitialSteps from "./setInitialSteps.helper";
import startChallenge from "./startChallenge.helper";
import { getUserFeatures } from "@redux/user/user.selectors";
import cancelQuestMapLevelChallenge from "@graphql/challenges/cancelQuestMapLevelChallenge.gql";
import { challengeResetSuccessAction } from "@redux/levels/levels.actions";
import { Storage, StorageKey } from "@utils/storage";
import moment from "moment";
import { getChallengeDetailsToggle } from "@graphql/challenges/getChallengeDetails.gql";

export default function* startChallengeIfActiveSaga() {
  try {
    const {
      status,
      subtype,
      yuHealth,
      endDateTime,
      levelSlotId,
      fitKitTypes,
      startDateTime,
      createdBySource,
      initialPedometerResult,
      shouldEndOnLastGoalAchieved,
      level,
      levelSlotTemplateId,
    }: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);
    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    const videoPlayerIsActive: ReturnType<typeof getVideoPlayerIsActive> = yield select(getVideoPlayerIsActive);
    const { yuniversalMap }: ReturnType<typeof getYuniversalProgress> = yield select(getYuniversalProgress);

    const isMeditation = subtype.includes("meditation");
    const hasChallengeEnded = moment().isAfter(endDateTime);
    const isActiveMediaChallenge = videoPlayerIsActive && levelSlotId;
    const shouldAutoCancelChallengeV1 = isActiveMediaChallenge && isMeditation;
    const shouldAutoCancelChallengeV2 =
      (isActiveMediaChallenge && !isMeditation) || (isActiveMediaChallenge && isMeditation && hasChallengeEnded);

    // This will cancel any video related challenges that are not meditations
    // This is because only meditations current have a custom progress screen
    // So challenges like internal Fiit challenges will still be auto cancelled.
    if (features?.enableResumeInAppMeditation ? shouldAutoCancelChallengeV2 : shouldAutoCancelChallengeV1) {
      try {
        yield Storage.removeItem(StorageKey.mediaPlayerProgress);
        yield call(cancelQuestMapLevelChallenge, levelSlotId);
        yield put(challengeResetSuccessAction());
        return;
      } catch (error) {
        Logger.error(error, { file: "cancelMeditopiaChallenge.saga" });
      }
    }

    if (levelSlotId && !status) {
      try {
        yield call(getChallengeDetailsToggle, {
          tempGameUseSettingsConfigForQuestMap: features.tempGameUseSettingsConfigForQuestMap,
          levelSlotId,
          getDetailsToggleVariables: {
            level,
            levelSlotTemplateId,
            yuniversalMap,
          },
        });
      } catch (error) {
        Logger.error(error, { file: "startChallengeIfActiveSaga.saga" });
      }

      if (initialPedometerResult === null) {
        yield fork(setInitialSteps, startDateTime, features);
      }

      yield call(startChallenge, {
        subtype,
        endDateTime,
        levelSlotId,
        fitKitTypes,
        startDateTime,
        videoPlayerIsActive,
        shouldEndOnLastGoalAchieved,
        createdBySource,
        yuHealth,
      });
    }
  } catch (error) {
    Logger.error(error, { file: "startChallengeIfActive" });
  }
}
