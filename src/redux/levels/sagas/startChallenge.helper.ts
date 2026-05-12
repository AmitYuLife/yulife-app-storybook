import { queryFitKitSampleData } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logger/logger";
import { DATE_FORMAT_WITH_TZ } from "@utils";
import { sumSampleValues } from "@utils/number";
import { AUTO_ROUND_DATA_TYPES } from "@utils/yuHealth";
import moment from "moment";
import { call, cancel, cancelled, fork, put, race, select, spawn, take, delay } from "redux-saga/effects";
import { cancelLocalPush } from "../../device/device.actions";
import { getUserFeatures } from "../../user/user.selectors";
import {
  CHALLENGE_CANCEL,
  CHALLENGE_END,
  challengeEndAction,
  challengeUpdateSuccessAction,
  challengeIsActive,
} from "../levels.actions";
import { ChallengeSourceType, ChallengeStartPayload, IActiveLevel } from "../levels.types";
import { DETOX_ENABLED } from "@services/socket";
import { Task } from "redux-saga";
import { ChallengesPayload, CreateMobileQuestLevelChallengeMutation, FitKitType } from "@graphql/__generated";
import { yuHealthSampleQuery } from "@services/fitkit/yu-health.helpers";
import { YuHealthOptions } from "@redux/_core/types";
import { updateMobileQuestLevelChallenge } from "@graphql/challenges/updateChallenge.gql";
import { HealthDataType, ISampleQueryResponse } from "@yu-life/react-native-yu-health";
import { startForegroundService, stopForegroundService } from "@redux/yu-health/sagas/foregroundService.helpers";
import listenToForegroundSteps from "@redux/pedometer/sagas/listenToForegroundSteps.helper";

export function* startTracking(
  startDateTime: string,
  endDateTime: string,
  fitKitTypes: FitKitType[],
  videoPlayerIsActive: boolean,
  yuHealth: YuHealthOptions | undefined,
  challengeId: string
) {
  const startTime = moment(startDateTime);
  const endTime = moment(endDateTime);

  if (videoPlayerIsActive) {
    return;
  }

  while (moment().isBefore(endTime)) {
    const isCancelled: boolean = yield cancelled();

    if (isCancelled) {
      return;
    }

    try {
      const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
      const performQuery = async () => {
        if (!features.tempGameEnableReleaseYuHealthV4) {
          const fitkitResult = await queryFitKitSampleData({
            startTime: startTime.format(DATE_FORMAT_WITH_TZ),
            endTime: endTime.format(DATE_FORMAT_WITH_TZ),
            fitKitTypes,
            features,
            metaData: { file: "startChallenge.helper" },
          });

          return fitkitResult.results;
        }

        if (!yuHealth) {
          return [];
        }

        return yuHealthSampleQuery({
          params: {
            startTime: startTime.toDate(),
            endTime: endTime.toDate(),
            dataType: yuHealth.dataType,
          },
          metadata: { file: "startChallenge.helper" },
          features,
        });
      };

      const queryResult: ISampleQueryResponse[] | ChallengesPayload[] = yield call(performQuery);

      if (queryResult.length > 0) {
        const results = {
          endDateTime,
          startDateTime,
          value: sumSampleValues(queryResult, !!yuHealth && AUTO_ROUND_DATA_TYPES.has(yuHealth.dataType)),
        };

        const { data }: Awaited<ReturnType<typeof updateMobileQuestLevelChallenge>> = yield call(
          updateMobileQuestLevelChallenge,
          {
            challengeId,
            payload: results,
          }
        );

        const challenge = data?.updateMobileQuestLevelChallenge?.challenge;

        if (challenge) {
          yield put(
            challengeUpdateSuccessAction({
              coins: challenge.yuCoinAwarded,
              isCompleted: challenge.status === "completed",
              milestonesLog: challenge.milestoneLog,
              rating: challenge.rating,
              incomingData: challenge.incomingData,
            })
          );
        }

        if (challenge?.status === "completed") {
          yield put(cancelLocalPush());
          yield put(challengeEndAction({ location: "startChallenge.helper status completed check" }));
          return;
        }
      }

      yield delay(15000);
    } catch {
      yield delay(30000);
    }
  }

  yield put(challengeEndAction({ location: "startChallenge.helper startTracking" }));
}

// android doesn't like big delays: Improvise. Adapt. Overcome.
export function* startTrackingTime(endDateTime: string) {
  const end = moment(endDateTime);

  while (moment().isBefore(end)) {
    yield delay(DETOX_ENABLED ? 2000 : 1000); // in e2e mode, timers under 1500ms will cause detox to hang infinitely
  }

  yield put(challengeEndAction({ location: "startChallenge.helper startTrackingTime" }));
}

type Args = {
  startDateTime: string;
  endDateTime: string;
  challengeId: string;
  enableForegroundService: boolean;
} & Pick<
  NonNullable<NonNullable<CreateMobileQuestLevelChallengeMutation["createMobileQuestLevelChallenge"]>["levelSlot"]>,
  "shouldEndOnLastGoalAchieved" | "fitKitTypes" | "subtype"
> &
  Pick<ChallengeStartPayload, "videoPlayerIsActive"> &
  Pick<IActiveLevel, "createdBySource" | "yuHealth">;

export default function* startChallenge({
  shouldEndOnLastGoalAchieved,
  startDateTime,
  endDateTime,
  fitKitTypes,
  videoPlayerIsActive,
  createdBySource,
  yuHealth,
  challengeId,
  enableForegroundService,
}: Args) {
  let challengeTask: Task | undefined;
  let foregroundStepsTask: Task | undefined;

  if (fitKitTypes?.length && createdBySource !== ChallengeSourceType.Watch) {
    // We don't want to track time when playing sudoku as we want the user to be able to start & then finish after midnight.
    // The challenge will be auto cancelled by quests.container if they go back to the map after the day has ended,
    // but if they are still playing the game, we will allow them to finish.
    challengeTask = shouldEndOnLastGoalAchieved
      ? yield fork(startTracking, startDateTime, endDateTime, fitKitTypes, !!videoPlayerIsActive, yuHealth, challengeId)
      : yield fork(startTrackingTime, endDateTime);

    if (enableForegroundService && yuHealth?.dataType === HealthDataType.steps) {
      const currentTime = moment();
      const endTime = moment(endDateTime);
      if (currentTime.isBefore(endTime)) {
        yield call(startForegroundService, { endTime: endTime.toDate() });
      }

      foregroundStepsTask = yield fork(listenToForegroundSteps);
    }
  }

  let inProgress = true;

  yield delay(50);
  yield put(challengeIsActive());

  while (inProgress) {
    const { challengeCancelled, challengeEnd } = yield race({
      challengeCancelled: take(CHALLENGE_CANCEL),
      challengeEnd: take(CHALLENGE_END),
    });

    if (challengeCancelled) {
      try {
        if (challengeTask) {
          yield cancel(challengeTask);
        }

        if (enableForegroundService) {
          if (foregroundStepsTask) {
            yield cancel(foregroundStepsTask);
          }

          // Stop foreground service when challenge is cancelled
          yield call(stopForegroundService);
        }

        inProgress = false;
      } catch (e) {
        yield spawn(() => {
          Logger.notify(e, { event: "startChallenge" });
        });
      }
    } else if (challengeEnd) {
      if (enableForegroundService) {
        if (foregroundStepsTask) {
          yield cancel(foregroundStepsTask);
        }

        yield call(stopForegroundService);
      }

      inProgress = false;
      return;
    }
  }
}
