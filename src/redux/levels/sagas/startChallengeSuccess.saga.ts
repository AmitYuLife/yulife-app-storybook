import { addSecondsToChallengeEndDateTime, DATE_FORMAT_WITHOUT_TZ } from "@utils";
import { call, put, select } from "redux-saga/effects";
import { getSteps } from "../../pedometer/pedometer.selectors";
import { challengeStartSuccessAction, pedometerStepsChallengeStarted } from "../levels.actions";
import startChallenge from "./startChallenge.helper";
import { ChallengeSourceType } from "../levels.types";
import moment from "moment";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getActiveProvider } from "@redux/yu-health/yu-health.selectors";
import { isForegroundServiceEnabled } from "@utils/yuHealth";

export default function* startChallengeSuccessSaga({ payload }: ReturnType<typeof challengeStartSuccessAction>) {
  const {
    createQuestMapLevelChallenge: {
      challenge: { startDateTime, endDateTime: remoteEndDateTime, id },
      levelSlot: { subtype, fitKitTypes, shouldEndOnLastGoalAchieved, yuHealth },
    },
    videoDuration,
    videoPlayerIsActive,
  } = payload;

  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
  const activeProvider: ReturnType<typeof getActiveProvider> = yield select(getActiveProvider);

  const initialPedometerSteps: ReturnType<typeof getSteps> = yield select(getSteps);
  yield put(pedometerStepsChallengeStarted(initialPedometerSteps));

  if (startDateTime && remoteEndDateTime && subtype) {
    const endDateTime = videoDuration
      ? moment(new Date(), DATE_FORMAT_WITHOUT_TZ).add(videoDuration, "seconds").format(DATE_FORMAT_WITHOUT_TZ)
      : addSecondsToChallengeEndDateTime(remoteEndDateTime);

    yield call(startChallenge, {
      endDateTime,
      startDateTime,
      subtype,
      fitKitTypes,
      shouldEndOnLastGoalAchieved,
      videoPlayerIsActive,
      yuHealth,
      createdBySource: ChallengeSourceType.Phone,
      challengeId: id,
      enableForegroundService: isForegroundServiceEnabled({ features, activeProvider }),
    });
  }
}
