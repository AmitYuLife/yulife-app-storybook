import cancelQuestMapLevelChallenge from "@graphql/challenges/cancelQuestMapLevelChallenge.gql";
import UpdateQuestMapLevelChallenge from "@graphql/challenges/updateQuestMapLevelChallenge.gql";
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
  challengeResetFailAction,
  challengeResetSuccessAction,
  challengeUpdateSuccessAction,
  challengeIsActive,
} from "../levels.actions";
import { ChallengeSourceType, ChallengeStartPayload, IActiveLevel } from "../levels.types";
import { DETOX_ENABLED } from "@services/socket";
import { Task } from "redux-saga";
import { QueryFitKitByTypesResponse } from "@services/fitkit/fitkit.types";
import {
  CreateQuestMapLevelChallengeMutation,
  FitKitType,
  UpdateQuestMapLevelChallengeMutation,
} from "@graphql/__generated";
import { yuHealthSampleQuery } from "@services/fitkit/yu-health.helpers";
import { YuHealthOptions } from "@redux/_core/types";

export function* startTracking(
  levelSlotId: string,
  startDateTime: string,
  endDateTime: string,
  fitKitTypes: FitKitType[],
  videoPlayerIsActive: boolean,
  yuHealth: YuHealthOptions
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
        if (!features.tempGameEnableReleaseYuHealth) {
          return queryFitKitSampleData({
            startTime: startTime.format(DATE_FORMAT_WITH_TZ),
            endTime: endTime.format(DATE_FORMAT_WITH_TZ),
            fitKitTypes,
            features,
            metaData: { file: "startChallenge.helper" },
          });
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

      const queryResult: QueryFitKitByTypesResponse = yield call(performQuery);

      if (queryResult.results.length > 0) {
        const results = {
          endDateTime,
          startDateTime,
          value: Math.floor(queryResult.results.reduce((accumulator, session) => accumulator + session.value, 0)),
        };

        const { data }: Awaited<ReturnType<typeof UpdateQuestMapLevelChallenge>> = yield call(
          UpdateQuestMapLevelChallenge,
          { levelSlotId, payload: results }
        );
        const challengeData: UpdateQuestMapLevelChallengeMutation["updateQuestMapLevelChallenge"] =
          data?.updateQuestMapLevelChallenge;

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
          yield put(challengeEndAction());
          return;
        }
      }

      yield delay(15000);
    } catch (e) {
      yield delay(30000);
    }
  }

  yield put(challengeEndAction());
}

// android doesn't like big delays: Improvise. Adapt. Overcome.
export function* startTrackingTime(endDateTime: string) {
  const end = moment(endDateTime);

  while (moment().isBefore(end)) {
    yield delay(DETOX_ENABLED ? 2000 : 1000); // in e2e mode, timers under 1500ms will cause detox to hang infinitely
  }

  yield put(challengeEndAction());
}

type Args = {
  levelSlotId: string;
  startDateTime: string;
  endDateTime: string;
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
  subtype,
  endDateTime,
  fitKitTypes,
  videoPlayerIsActive,
  createdBySource,
  yuHealth,
}: Args) {
  let challengeTask: Task;

  if (fitKitTypes.length && createdBySource !== ChallengeSourceType.watch) {
    // We don't want to track time when playing sudoku as we want the user to be able to start & then finish after midnight.
    // The challenge will be auto cancelled by quests.container if they go back to the map after the day has ended,
    // but if they are still playing the game, we will allow them to finish.

    challengeTask = shouldEndOnLastGoalAchieved
      ? yield fork(startTracking, levelSlotId, startDateTime, endDateTime, fitKitTypes, videoPlayerIsActive, yuHealth)
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
        yield call(cancelQuestMapLevelChallenge, levelSlotId);

        if (challengeTask) {
          yield cancel(challengeTask);
        }

        yield put(challengeResetSuccessAction({ subtype }));

        inProgress = false;
      } catch (e) {
        yield put(challengeResetFailAction());
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
