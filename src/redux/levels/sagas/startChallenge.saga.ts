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
import { QueryResult } from "@apollo/client";
import { CreateMobileQuestLevelChallengeMutation, CreateQuestMapLevelChallengeMutation } from "@graphql/__generated";
import { toYuHealthReduxType } from "@utils";
import { getUserFeatures } from "@redux/user/user.selectors";
import { createChallengeToggle, getCreateChallengeData } from "@graphql/challenges/createChallenge.gql";

export default function* startChallengeSaga({ payload }: ReturnType<typeof challengeStartAction>) {
  try {
    const {
      levelSlotId,
      challengeStartSuccessPayload,
      createQuestMapLevelChallengeVariables,
      createMobileQuestLevelChallengeVariables,
    } = payload;

    const {
      endDateTime,
      challengeIsActive,
      levelSlotId: activeLevelSlotId,
      id,
    }: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    const activeChallengeId = activeLevelSlotId || id;

    if (activeChallengeId || challengeIsActive || Boolean(endDateTime)) {
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

    const { tempGameUseSettingsConfigForQuestMap }: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

    const { data }: QueryResult<CreateQuestMapLevelChallengeMutation | CreateMobileQuestLevelChallengeMutation> =
      yield call(createChallengeToggle, {
        tempGameUseSettingsConfigForQuestMap,
        createQuestMapLevelChallengeVariables,
        createMobileQuestLevelChallengeVariables,
      });

    const result = getCreateChallengeData(data, tempGameUseSettingsConfigForQuestMap);

    if (result) {
      const { levelSlot } = result;
      yield put(
        challengeStartSuccessAction({
          createQuestMapLevelChallenge: {
            ...result,
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
