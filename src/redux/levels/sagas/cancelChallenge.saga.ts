import { cancelChallengeToggle } from "@graphql/challenges/cancelChallenge.gql";
import { Storage, StorageKey } from "@utils/storage";
import { call, put, select } from "redux-saga/effects";
import { challengeResetSuccessAction } from "../levels.actions";
import { getActiveLevel } from "../levels.selectors";
import { getUserFeatures } from "@redux/user/user.selectors";

export default function* cancelChallengeSaga() {
  const activeLevel: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  if (activeLevel?.levelSlotId && activeLevel.id && activeLevel?.subtype) {
    yield call(cancelChallengeToggle, {
      levelSlotId: activeLevel?.levelSlotId,
      tempGameUseSettingsConfigForQuestMapV3: features.tempGameUseSettingsConfigForQuestMapV3,
      challengeId: activeLevel?.id,
    });

    yield put(challengeResetSuccessAction({ subtype: activeLevel?.subtype }));
  }

  yield call(Storage.removeItem, StorageKey.mediaPlayerProgress);
}
