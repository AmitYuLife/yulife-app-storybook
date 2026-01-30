import { call, put, select, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";
import { gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import { getPathwayChallengeId } from "../pathways.selectors";
import { pathwayChallengeEnded } from "../pathways.actions";

export function* cancelPathwayChallengeSaga() {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  const pathwayChallengeId: string | null = yield select(getPathwayChallengeId);

  if (!pathwayChallengeId) {
    return;
  }

  try {
    yield call(() =>
      client().mutate({
        mutation: gql("CancelPathwayChallengeDocument"),
        variables: { challengeId: pathwayChallengeId },
      })
    );
    yield put(pathwayChallengeEnded());
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "cancelPathwayChallengeSaga" });
    });
  }
}
