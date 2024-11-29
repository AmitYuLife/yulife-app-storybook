import { select } from "redux-saga/effects";
import StreakSavedModal from "@modals/streak-saved/streak-saved.modal";
import { Navigation } from "@navigation/main";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getUserActiveStreakSuccess } from "@redux/user/user.actions";

export default function* showStreakSavedModalSaga(dataPayload: ReturnType<typeof getUserActiveStreakSuccess>) {
  const { payload } = dataPayload ?? {};

  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
  if (!features.tempGameEnableStreakSaver) {
    return;
  }

  if (payload.activeStreak.canUseStreakSaver) {
    const frameModal = <StreakSavedModal onClose={() => Navigation.dismissOverlayWithChild()} />;
    Navigation.showOverlayWithChild(frameModal, false);
  }
}
