import { select, put } from "redux-saga/effects";
import { getPathwayChallengeId } from "../pathways.selectors";
import { pathwayChallengeCancel } from "../pathways.actions";

export function* cancelPathwayChallengeIfActiveSaga() {
  const pathwayChallengeId: string | null = yield select(getPathwayChallengeId);

  if (pathwayChallengeId) {
    yield put(pathwayChallengeCancel());
  }
}
