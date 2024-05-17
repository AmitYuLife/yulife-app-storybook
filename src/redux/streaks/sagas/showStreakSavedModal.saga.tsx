import { select } from "redux-saga/effects";
import { getStreaks } from "../streaks.selectors";
import StreakSavedModal from "@modals/streak-saved/streak-saved.modal";
import { Navigation } from "@navigation/main";
import { getUserFeatures } from "@redux/user/user.selectors";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";

export default function* showStreakSavedModalSaga(data: { payload: string; type: string }) {
  const { payload: appState, type } = data ?? {};
  if (type === UPDATE_APP_STATE && appState !== "active") {
    return;
  }

  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
  if (!features.tempGameEnableStreakSaver) {
    return;
  }

  const streaks: ReturnType<typeof getStreaks> = yield select(getStreaks);
  if (streaks.canUseStreakSaver) {
    const frameModal = <StreakSavedModal onClose={() => Navigation.dismissOverlayWithChild()} />;
    Navigation.showOverlayWithChild(frameModal, false);
  }
}
