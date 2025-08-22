import { getStepsBlackListApps } from "@redux/daily-steps/daily-steps.selectors";
import { getUserFeatures } from "@redux/user/user.selectors";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { call, put, select, spawn, delay } from "redux-saga/effects";
import {
  challengeEndFailAction,
  challengeEndSuccessAction,
  challengeNoDataDeferAction,
  challengeResetSuccessAction,
} from "../levels.actions";
import { logEmptyResultDebugData, getEndResult } from "../levels.helpers";
import { getActiveLevel } from "../levels.selectors";
import { isEmpty } from "lodash";
import { updateMobileQuestLevelChallenge } from "@graphql/challenges/updateChallenge.gql";
import { UpdateMobileQuestLevelChallengeMutation } from "@graphql/__generated";
import { getDebugToolsEnabled } from "@redux/debug/debug.selectors";

const RETRY_UPDATE_CHALLENGE_COUNT = 5;

interface IEndChallengeSaga {
  payload?: {
    skipDefer: boolean;
    /**
     * used for debugging purposes. For tracking the location of the caller
     * */
    location?: string;
  };
}

export default function* endChallengeSaga({ payload }: IEndChallengeSaga = {}) {
  const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  if (active) {
    const { milestones, milestonesLog, ...metaData } = active; // eslint-disable-line @typescript-eslint/no-unused-vars

    yield spawn(() => Logger.logMixpanelEvent("end_challenge_triggered", { ...metaData, location: payload.location }));
  }

  if (active.id) {
    if (active.isCompleted) {
      yield put(challengeEndSuccessAction(null));
    } else {
      try {
        const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
        const debugToolsEnabled: ReturnType<typeof getDebugToolsEnabled> = yield select(getDebugToolsEnabled);
        const stepsBlackListApps: string[] = yield select(getStepsBlackListApps);
        const result: Unpacked<typeof getEndResult> = yield call(getEndResult, active, stepsBlackListApps, features);

        if (result.value === 0 && !payload?.skipDefer && debugToolsEnabled && !isEmpty(active.fitKitTypes)) {
          yield spawn(async () => {
            logEmptyResultDebugData({
              features,
              result,
              blacklistApps: stepsBlackListApps,
              activeChallenge: active,
            });
          });

          yield put(challengeNoDataDeferAction());

          return;
        }

        let challengeData: UpdateMobileQuestLevelChallengeMutation["updateMobileQuestLevelChallenge"];
        let challengeStatus = "active";
        let updateActiveChallengeCount = 0;
        while (challengeStatus !== "completed" && updateActiveChallengeCount < RETRY_UPDATE_CHALLENGE_COUNT) {
          const { data }: Awaited<ReturnType<typeof updateMobileQuestLevelChallenge>> = yield call(
            updateMobileQuestLevelChallenge,
            {
              challengeId: active.id,
              payload: result,
              yuniversalMap: active.yuniversalMap,
              level: active.level,
            }
          );

          challengeData = data?.updateMobileQuestLevelChallenge;

          challengeStatus = challengeData?.challenge?.status;
          if (challengeStatus !== "completed") {
            yield delay(3000);
            updateActiveChallengeCount += 1;
          }
        }

        if (challengeData) {
          yield put(
            challengeEndSuccessAction({
              milestonesLog: challengeData.challenge?.milestoneLog,
              coins: challengeData.challenge?.yuCoinAwarded,
              level: challengeData.challenge?.level,
              rating: challengeData.challenge?.rating,
              incomingData: challengeData.challenge?.incomingData,
            })
          );
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
