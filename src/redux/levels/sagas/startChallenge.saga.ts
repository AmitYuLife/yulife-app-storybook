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
import client from "@graphql/_core/client";
import { QueryResult } from "@apollo/client";
import { CreateQuestMapLevelChallengeMutation, gql, ActiveChallengeSourceType } from "@graphql/__generated";
import { toYuHealthReduxType } from "@utils";

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

    const { data }: QueryResult<CreateQuestMapLevelChallengeMutation> = yield call(() =>
      client().mutate({
        mutation: gql("CreateQuestMapLevelChallengeDocument"),
        variables: {
          ...createQuestMapLevelChallengeVariables,
          createdBySource: ActiveChallengeSourceType.Phone,
        },
        errorPolicy: "ignore",
      })
    );

    if (data?.createQuestMapLevelChallenge) {
      const { levelSlot } = data.createQuestMapLevelChallenge;
      yield put(
        challengeStartSuccessAction({
          createQuestMapLevelChallenge: {
            ...data.createQuestMapLevelChallenge,
            levelSlot: {
              ...levelSlot,
              yuHealth: toYuHealthReduxType(levelSlot.yuHealth),
            },
          },
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
