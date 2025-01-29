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
import { FetchResult } from "@apollo/client";
import { CreateMobileQuestLevelChallengeMutation, CreateQuestMapLevelChallengeMutation } from "@graphql/__generated";
import { toYuHealthReduxType } from "@utils";
import { getUserFeatures } from "@redux/user/user.selectors";
import { createChallengeToggle, getCreateChallengeData } from "@graphql/challenges/createChallenge.gql";
import { t } from "@locale";
import { getIsStatusCodeClientErrors } from "@utils/statusCode";
import moment from "moment";

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
        yield put(challengeStartFailedAction({ error: t("create_challenge_error") }));
        return;
      }
    }

    const { tempGameUseSettingsConfigForQuestMapV3 }: ReturnType<typeof getUserFeatures> = yield select(
      getUserFeatures
    );

    const {
      data,
      extensions,
    }: FetchResult<CreateMobileQuestLevelChallengeMutation | CreateQuestMapLevelChallengeMutation> = yield call(
      createChallengeToggle,
      {
        tempGameUseSettingsConfigForQuestMapV3,
        createQuestMapLevelChallengeVariables,
        createMobileQuestLevelChallengeVariables,
      }
    );

    const staleTimestamp = moment(extensions?.tracing?.startTime).format();

    const result = getCreateChallengeData(data);

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
          levelSlotId,
          staleTimestamp,
          ...challengeStartSuccessPayload,
        })
      );
    } else {
      yield put(challengeStartFailedAction({ error: t("create_challenge_error") }));
    }
  } catch (error) {
    const graphqlError = error?.graphQLErrors?.[0];
    const statusCode: number = graphqlError?.statusCode;
    yield put(
      challengeStartFailedAction({
        error: getIsStatusCodeClientErrors(statusCode) ? graphqlError?.message : t("create_challenge_error"),
      })
    );
  }
}
