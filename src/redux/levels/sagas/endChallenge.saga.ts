import updateActiveChallengeWithClient from "@graphql/challenges/updateActiveChallenge.gql";
import UpdateQuestMapLevelChallenge from "@graphql/challenges/updateQuestMapLevelChallenge.gql";
import { UpdateActiveChallenge } from "@graphql/_core/schema";
import { getUserFeatures } from "@redux/user/user.selectors";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { call, put, select, spawn, delay } from "redux-saga/effects";
import { challengeEndFailAction, challengeEndSuccessAction, challengeResetSuccessAction } from "../levels.actions";
import { getEndResult } from "../levels.helpers";
import { getActiveLevel } from "../levels.selectors";

const RETRY_UPDATE_CHALLENGE_COUNT = 5;

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

        let challengeData: UpdateActiveChallenge;
        let challengeStatus = "active";
        let updateActiveChallengeCount = 0;
        while (challengeStatus !== "completed" && updateActiveChallengeCount < RETRY_UPDATE_CHALLENGE_COUNT) {
          const { data }: Unpacked<typeof updateActiveChallengeWithClient> = features.refactoredChallengeApi
            ? yield call(UpdateQuestMapLevelChallenge, active.levelSlotId, result)
            : yield call(updateActiveChallengeWithClient, active.levelSlotId, result);

          challengeStatus = data?.updateActiveChallenge?.challenge?.status;
          if (challengeStatus !== "completed") {
            yield delay(3000);
            updateActiveChallengeCount += 1;
          }

          challengeData = data;
        }

        if (challengeData?.updateActiveChallenge) {
          yield put(challengeEndSuccessAction(challengeData));
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
