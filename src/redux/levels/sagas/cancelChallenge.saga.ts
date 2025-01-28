import { cancelChallengeToggle } from "@graphql/challenges/cancelChallenge.gql";
import { Storage, StorageKey } from "@utils/storage";
import { call, put, select } from "redux-saga/effects";
import { challengeResetSuccessAction } from "../levels.actions";
import { getActiveLevel } from "../levels.selectors";

export default function* cancelChallengeSaga() {
  const activeLevel: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  if (activeLevel?.levelSlotId && activeLevel.id && activeLevel?.subtype) {
    yield call(cancelChallengeToggle, {
      levelSlotId: activeLevel?.levelSlotId,
      challengeId: activeLevel?.id,
    });

    yield put(challengeResetSuccessAction({ subtype: activeLevel?.subtype }));
  }

  yield call(Storage.removeItem, StorageKey.mediaPlayerProgress);
}
