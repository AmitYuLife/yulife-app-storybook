import Logger from "@services/logging/logger";
import { call, select, put, fork } from "redux-saga/effects";
import { getActiveLevel, getVideoPlayerIsActive } from "../levels.selectors";
import startChallenge from "./startChallenge.helper";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getActiveProvider } from "@redux/yu-health/yu-health.selectors";
import { challengeResetSuccessAction } from "@redux/levels/levels.actions";
import { Storage, StorageKey } from "@utils/storage";
import moment from "moment";
import { getMobileQuestLevelDetails } from "@graphql/challenges/getChallengeDetails.gql";
import { cancelChallengeToggle } from "@graphql/challenges/cancelChallenge.gql";
import setInitialSteps from "./setInitialSteps.helper";
import { isForegroundServiceEnabled } from "@utils/yuHealth";

export default function* startChallengeIfActiveSaga() {
  try {
    const {
      status,
      subtype,
      yuHealth,
      endDateTime,
      fitKitTypes,
      startDateTime,
      createdBySource,
      initialPedometerResult,
      shouldEndOnLastGoalAchieved,
      id,
      level,
      levelSlotTemplateId,
      yuniversalMap,
    }: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);
    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    const activeProvider: ReturnType<typeof getActiveProvider> = yield select(getActiveProvider);
    const videoPlayerIsActive: ReturnType<typeof getVideoPlayerIsActive> = yield select(getVideoPlayerIsActive);

    const challengeId = id;
    const isMeditation = subtype.includes("meditation");
    const hasChallengeEnded = moment().isAfter(endDateTime);
    const isActiveMediaChallenge = videoPlayerIsActive && challengeId;
    const shouldAutoCancelChallenge =
      (isActiveMediaChallenge && !isMeditation) || (isActiveMediaChallenge && isMeditation && hasChallengeEnded);

    // This will cancel any video related challenges that are not meditations
    // This is because only meditations current have a custom progress screen
    // So challenges like internal Fiit challenges will still be auto cancelled.
    if (shouldAutoCancelChallenge) {
      try {
        yield Storage.removeItem(StorageKey.mediaPlayerProgress);
        yield call(cancelChallengeToggle, {
          challengeId: id,
        });
        yield put(challengeResetSuccessAction());
        return;
      } catch (error) {
        Logger.error(error, { file: "cancelMeditopiaChallenge.saga" });
      }
    }

    if (challengeId && !status) {
      try {
        yield call(getMobileQuestLevelDetails, {
          level,
          levelSlotTemplateId,
          yuniversalMap,
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
        fitKitTypes,
        startDateTime,
        videoPlayerIsActive,
        shouldEndOnLastGoalAchieved,
        createdBySource,
        yuHealth,
        challengeId: id,
        enableForegroundService: isForegroundServiceEnabled({ features, activeProvider }),
      });
    }
  } catch (error) {
    Logger.error(error, { file: "startChallengeIfActive" });
  }
}
