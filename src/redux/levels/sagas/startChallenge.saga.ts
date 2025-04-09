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
import { ActiveChallengeSourceType, CreateMobileQuestLevelChallengeMutation, gql } from "@graphql/__generated";
import { toYuHealthReduxType } from "@utils";
import { t } from "@locale";
import { getIsStatusCodeClientErrors } from "@utils/statusCode";
import moment from "moment";
import client from "@graphql/_core/client";

export default function* startChallengeSaga({ payload }: ReturnType<typeof challengeStartAction>) {
  try {
    const { levelSlotId, challengeStartSuccessPayload, createMobileQuestLevelChallengeVariables } = payload;

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

    const { data, extensions }: FetchResult<CreateMobileQuestLevelChallengeMutation> = yield call(() =>
      client().mutate({
        mutation: gql("CreateMobileQuestLevelChallengeDocument"),
        variables: {
          ...createMobileQuestLevelChallengeVariables,
          createdBySource: ActiveChallengeSourceType.Phone,
        },
      })
    );

    const result = data?.createMobileQuestLevelChallenge;
    const staleTimestamp = moment(extensions?.tracing?.startTime).format();

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
