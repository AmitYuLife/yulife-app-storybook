import getChallengeDetails from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import Logger from "@services/logging/logger";
import { call, select, fork, put } from "redux-saga/effects";
import { getActiveLevel, getVideoPlayerIsActive } from "../levels.selectors";
import setInitialSteps from "./setInitialSteps.helper";
import startChallenge from "./startChallenge.helper";
import { getUserFeatures } from "@redux/user/user.selectors";
import cancelQuestMapLevelChallenge from "@graphql/challenges/cancelQuestMapLevelChallenge.gql";
import { challengeResetSuccessAction } from "@redux/levels/levels.actions";
import { Storage, StorageKey } from "@utils/storage";
import moment from "moment";

export default function* startChallengeIfActiveSaga() {
  try {
    const {
      status,
      subtype,
      endDateTime,
      levelSlotId,
      fitKitTypes,
      startDateTime,
      initialPedometerResult,
      shouldEndOnLastGoalAchieved,
    }: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);
    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    const videoPlayerIsActive: ReturnType<typeof getVideoPlayerIsActive> = yield select(getVideoPlayerIsActive);

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
        yield call(getChallengeDetails, levelSlotId);
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
      });
    }
  } catch (error) {
    Logger.error(error, { file: "startChallengeIfActive" });
  }
}
