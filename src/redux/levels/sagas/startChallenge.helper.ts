import cancelActiveChallengeWithClient from "@graphql/challenges/cancelActiveChallenge.gql";
import updateActiveChallengeWithClient from "@graphql/challenges/updateActiveChallenge.gql";
import { ChallengePayload, FitKitType } from "@graphql/_core/schema/globalTypes";
import {
  CreateActiveChallenge_createActiveChallenge_challenge,
  CreateActiveChallenge_createActiveChallenge_levelSlot,
} from "@graphql/_core/schema";
import { queryFitKitByTypes } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { DATE_FORMAT_WITH_TZ } from "@services/utils";
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
import { DETOX_ENABLED } from "@services/socket";
import { Task } from "redux-saga";

export function* startTracking(
  levelSlotId: string,
  startDateTime: string,
  endDateTime: string,
  fitKitTypes: FitKitType[]
) {
  const start = moment(startDateTime).format(DATE_FORMAT_WITH_TZ);
  const end = moment(endDateTime);

  while (moment().isBefore(end)) {
    const isCancelled: boolean = yield cancelled();

    if (isCancelled) {
      return;
    }

    try {
      const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
      const queryResult: ChallengePayload[] = yield call(
        queryFitKitByTypes,
        start,
        end.format(DATE_FORMAT_WITH_TZ),
        fitKitTypes,
        features
      );

      if (queryResult.length > 0) {
        const results = {
          endDateTime,
          startDateTime,
          value: Math.floor(queryResult.reduce((accumulator, session) => accumulator + session.value, 0)),
        };

        const { data } = yield call(updateActiveChallengeWithClient, levelSlotId, results);
        yield put(challengeUpdateSuccessAction(data));

        if ((data?.updateActiveChallenge?.challenge?.status || "") === "completed") {
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

type Args = Omit<CreateActiveChallenge_createActiveChallenge_challenge, "level" | "status"> &
  Pick<CreateActiveChallenge_createActiveChallenge_levelSlot, "shouldEndOnLastGoalAchieved" | "fitKitTypes">;

export default function* startChallenge({
  shouldEndOnLastGoalAchieved,
  levelSlotId,
  startDateTime,
  endDateTime,
  fitKitTypes,
}: Args) {
  const challengeTask: Task = shouldEndOnLastGoalAchieved
    ? yield fork(startTracking, levelSlotId, startDateTime, endDateTime, fitKitTypes)
    : yield fork(startTrackingTime, endDateTime);

  let inProgress = true;

  yield put(challengeIsActive());

  while (inProgress) {
    const { challengeCancelled, challengeEnd } = yield race({
      challengeCancelled: take(CHALLENGE_CANCEL),
      challengeEnd: take(CHALLENGE_END),
    });

    if (challengeCancelled) {
      try {
        yield call(cancelActiveChallengeWithClient, levelSlotId);

        if (challengeTask) {
          yield cancel(challengeTask);
        }

        yield put(challengeResetSuccessAction());
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
