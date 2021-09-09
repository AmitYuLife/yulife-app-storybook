import updateActiveChallengeWithClient from "@graphql/challenges/updateActiveChallenge.gql";
import { getUserFeatures } from "@redux/user/user.selectors";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { call, put, select, spawn } from "redux-saga/effects";
import { challengeEndFailAction, challengeEndSuccessAction, challengeResetSuccessAction } from "../levels.actions";
import { getEndResult } from "../levels.helpers";
import { getActiveLevel } from "../levels.selectors";

export default function* endChallengeSaga() {
  const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  if (active) {
    const { milestones, milestonesLog, ...metaData } = active; // eslint-disable-line @typescript-eslint/no-unused-vars

    yield spawn(() => Logger.logMixpanelEvent("end_challenge_triggered", metaData));
  }

  if (active.levelSlotId) {
    if (active.isCompleted) {
      yield put(challengeEndSuccessAction({ updateActiveChallenge: null }));
    } else {
      try {
        const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
        const result: Unpacked<typeof getEndResult> = yield call(getEndResult, active, features);
        const { data }: Unpacked<typeof updateActiveChallengeWithClient> = yield call(
          updateActiveChallengeWithClient,
          active.levelSlotId,
          result
        );

        if (data.updateActiveChallenge) {
          yield put(challengeEndSuccessAction(data));
        } else {
          yield put(challengeResetSuccessAction());
        }
      } catch (e) {
        yield put(challengeEndFailAction());
        yield spawn(() => {
          Logger.error(e, { event: "endChallenge" });
        });
      }
    }
  } else {
    yield put(challengeResetSuccessAction());
  }
}
