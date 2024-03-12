import { call, race, put, take, select } from "redux-saga/effects";
import {
  challengeStartSuccessAction,
  challengeStartFailedAction,
  challengeStartAction,
  challengeCancelAction,
  CHALLENGE_RESET_SUCCESS,
  CHALLENGE_RESET_FAIL,
} from "../levels.actions";
import { getActiveLevel } from "../levels.selectors";
import createQuestMapLevelChallenge from "@graphql/challenges/createQuestMapLevelChallenge.gql";
import { Unpacked } from "@utils";
import { ActiveChallengeSourceType } from "@graphql/_core/schema/globalTypes";

export default function* startChallengeSaga({ payload }: ReturnType<typeof challengeStartAction>) {
  try {
    const { levelSlotId, challengeStartSuccessPayload, createQuestMapLevelChallengeVariables } = payload;

    const {
      endDateTime,
      challengeIsActive,
      levelSlotId: activeLevelSlotId,
    }: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    if (activeLevelSlotId || challengeIsActive || Boolean(endDateTime)) {
      yield put(challengeCancelAction());
      const { challengeResetFail } = yield race({
        challengeResetSuccess: take(CHALLENGE_RESET_SUCCESS),
        challengeResetFail: take(CHALLENGE_RESET_FAIL),
      });

      if (challengeResetFail) {
        yield put(challengeStartFailedAction());
        return;
      }
    }

    const { data }: Unpacked<typeof createQuestMapLevelChallenge> = yield call(createQuestMapLevelChallenge, {
      ...createQuestMapLevelChallengeVariables,
      createdBySource: ActiveChallengeSourceType.phone,
    });

    if (data?.createQuestMapLevelChallenge) {
      yield put(
        challengeStartSuccessAction({
          createQuestMapLevelChallenge: data?.createQuestMapLevelChallenge,
          ...challengeStartSuccessPayload,
          levelSlotId,
        })
      );
    } else {
      yield put(challengeStartFailedAction());
    }
  } catch (error) {
    yield put(challengeStartFailedAction());
  }
}
