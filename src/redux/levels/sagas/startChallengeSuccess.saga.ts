import { addSecondsToChallengeEndDateTime, DATE_FORMAT_WITHOUT_TZ } from "@utils";
import { call, put, select, fork } from "redux-saga/effects";
import { getSteps } from "../../pedometer/pedometer.selectors";
import { challengeStartSuccessAction, pedometerStepsChallengeStarted } from "../levels.actions";
import setInitialSteps from "./setInitialSteps.helper";
import startChallenge from "./startChallenge.helper";
import { getUserFeatures } from "@redux/user/user.selectors";
import { ChallengeSourceType } from "../levels.types";
import moment from "moment";

export default function* startChallengeSuccessSaga({ payload }: ReturnType<typeof challengeStartSuccessAction>) {
  const {
    createQuestMapLevelChallenge: {
      challenge: { startDateTime, endDateTime: remoteEndDateTime, id },
      levelSlot: { subtype, fitKitTypes, shouldEndOnLastGoalAchieved, yuHealth },
    },
    levelSlotId,
    videoDuration,
    videoPlayerIsActive,
  } = payload;

  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  if (features.waitForStepsSync) {
    yield put(pedometerStepsChallengeStarted(null));
    yield fork(setInitialSteps, startDateTime, features);
  } else {
    const initialPedometerSteps: ReturnType<typeof getSteps> = yield select(getSteps);
    yield put(pedometerStepsChallengeStarted(initialPedometerSteps));
  }

  if (startDateTime && remoteEndDateTime && subtype) {
    const endDateTime = videoDuration
      ? moment(new Date(), DATE_FORMAT_WITHOUT_TZ).add(videoDuration, "seconds").format(DATE_FORMAT_WITHOUT_TZ)
      : addSecondsToChallengeEndDateTime(remoteEndDateTime);

    yield call(startChallenge, {
      endDateTime,
      levelSlotId,
      startDateTime,
      subtype,
      fitKitTypes,
      shouldEndOnLastGoalAchieved,
      videoPlayerIsActive,
      yuHealth,
      createdBySource: ChallengeSourceType.Phone,
      challengeId: id,
      tempGameUseSettingsConfigForQuestMapV3: features.tempGameUseSettingsConfigForQuestMapV3,
    });
  }
}
