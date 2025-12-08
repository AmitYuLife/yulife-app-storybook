import StreakSavedModal from "@modals/streak-saved/streak-saved.modal";

import { Navigation } from "@navigation/main";
import { getUserActiveStreakSuccess } from "@redux/user/user.actions";
import { call } from "redux-saga/effects";

export default function* showStreakSavedModalSaga(dataPayload: ReturnType<typeof getUserActiveStreakSuccess>) {
  const { payload } = dataPayload ?? {};

  if (payload.activeStreak.canUseStreakSaver) {
    const frameModal = (
      <StreakSavedModal
        onClose={() => Navigation.dismissOverlayWithChild()}
        streakSaverCount={payload.activeStreak.availableStreakSavers}
      />
    );

    yield call(() => Navigation.showOverlayWithChild({ children: frameModal, withBlurBackground: false }));
  }
}
