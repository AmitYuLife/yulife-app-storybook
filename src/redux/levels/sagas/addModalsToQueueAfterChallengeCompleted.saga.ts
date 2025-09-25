import { call, put } from "redux-saga/effects";
import uuid from "react-native-uuid";
import getStreakModalDetails from "@redux/levels/sagas/getStreakModalDetails.saga";
import getChestModalDetails from "@redux/levels/sagas/getChestModalDetails.saga";
import { challengeResetSuccessAction } from "@redux/levels/levels.actions";
import { addModalToQueue } from "@redux/modal/modal.actions";
import { MODALS } from "@navigation/constants";
import { MODALS_PRIORITIES } from "@redux/modal/modal.reducer";

export default function* addModalsToQueueAfterChallengeCompleted() {
  const modals = [];
  const chestModal: { id: string; props: Record<string, any> } = yield call(getChestModalDetails);

  if (chestModal) {
    modals.push({
      id: uuid.v4().toString(),
      modalId: chestModal.id,
      props: chestModal.props,
      priority: MODALS_PRIORITIES[MODALS.chest],
    });
  }

  yield put(challengeResetSuccessAction());
  const streakModal: ReturnType<typeof getStreakModalDetails> = yield call(getStreakModalDetails);

  if (streakModal) {
    modals.push({
      id: uuid.v4().toString(),
      modalId: MODALS.streaks,
      props: streakModal,
      priority: MODALS_PRIORITIES[MODALS.streaks],
    });
  }

  if (modals.length > 0) {
    yield put(addModalToQueue(modals));
  }
}
