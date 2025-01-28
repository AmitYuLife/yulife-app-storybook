import { queryFitKitSampleData } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { DATE_FORMAT_WITH_TZ } from "@utils";
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
import { ChallengesPayload, CreateQuestMapLevelChallengeMutation, FitKitType } from "@graphql/__generated";
import { yuHealthSampleQuery } from "@services/fitkit/yu-health.helpers";
import { YuHealthOptions } from "@redux/_core/types";
import { getUpdateChallengeData, updateChallengeToggle } from "@graphql/challenges/updateChallenge.gql";
import { ISampleQueryResponse } from "@yu-life/react-native-yu-health";

export function* startTracking(
  levelSlotId: string,
  startDateTime: string,
  endDateTime: string,
  fitKitTypes: FitKitType[],
  videoPlayerIsActive: boolean,
  yuHealth: YuHealthOptions,
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
        if (!features.tempGameEnableReleaseYuHealthV2) {
          const fitkitResult = await queryFitKitSampleData({
            startTime: startTime.format(DATE_FORMAT_WITH_TZ),
            endTime: endTime.format(DATE_FORMAT_WITH_TZ),
            fitKitTypes,
            features,
            metaData: { file: "startChallenge.helper" },
          });

          return fitkitResult.results;
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
          value: Math.floor(queryResult.reduce((accumulator, session) => accumulator + session.value, 0)),
        };

        const { data }: Awaited<ReturnType<typeof updateChallengeToggle>> = yield call(updateChallengeToggle, {
          tempGameUseSettingsConfigForQuestMapV3: features.tempGameUseSettingsConfigForQuestMapV3,
          levelSlotId,
          challengeId,
          payload: results,
        });

        const challengeData = getUpdateChallengeData(data);

        yield put(
          challengeUpdateSuccessAction({
            coins: challengeData?.challenge.yuCoinAwarded,
            isCompleted: (challengeData?.challenge.status || "") === "completed",
            milestonesLog: challengeData?.challenge.milestoneLog,
            rating: challengeData?.challenge.rating,
            incomingData: challengeData?.challenge.incomingData,
          })
        );

        if ((challengeData?.challenge?.status || "") === "completed") {
          yield put(cancelLocalPush());
          yield put(challengeEndAction({ location: "startChallenge.helper status completed check" }));
          return;
        }
      }

      yield delay(15000);
    } catch (e) {
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
  levelSlotId: string;
  startDateTime: string;
  endDateTime: string;
  challengeId: string;
  tempGameUseSettingsConfigForQuestMapV3: boolean;
} & Pick<
  CreateQuestMapLevelChallengeMutation["createQuestMapLevelChallenge"]["levelSlot"],
  "shouldEndOnLastGoalAchieved" | "fitKitTypes" | "subtype"
> &
  Pick<ChallengeStartPayload, "videoPlayerIsActive"> &
  Pick<IActiveLevel, "createdBySource" | "yuHealth">;

export default function* startChallenge({
  shouldEndOnLastGoalAchieved,
  levelSlotId,
  startDateTime,
  endDateTime,
  fitKitTypes,
  videoPlayerIsActive,
  createdBySource,
  yuHealth,
  challengeId,
}: Args) {
  let challengeTask: Task;

  if (fitKitTypes.length && createdBySource !== ChallengeSourceType.Watch) {
    // We don't want to track time when playing sudoku as we want the user to be able to start & then finish after midnight.
    // The challenge will be auto cancelled by quests.container if they go back to the map after the day has ended,
    // but if they are still playing the game, we will allow them to finish.

    challengeTask = shouldEndOnLastGoalAchieved
      ? yield fork(
          startTracking,
          levelSlotId,
          startDateTime,
          endDateTime,
          fitKitTypes,
          videoPlayerIsActive,
          yuHealth,
          challengeId
        )
      : yield fork(startTrackingTime, endDateTime);
  }

  let inProgress = true;

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

        inProgress = false;
      } catch (e) {
        yield spawn(() => {
          Logger.error(e, { event: "startChallenge" });
        });
      }
    } else if (challengeEnd) {
      inProgress = false;
      return;
    }
  }
}
