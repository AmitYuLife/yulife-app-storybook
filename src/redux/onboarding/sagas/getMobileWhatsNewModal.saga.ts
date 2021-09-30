import FastImage from "react-native-fast-image";
import { Navigation } from "react-native-navigation";
import { call, delay, select, spawn, take } from "redux-saga/effects";
import { getMobileWhatsNewModalClient } from "@graphql/onboardingSteps/getMobileWhatsNewModal.gql";
import { MODALS } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getModalState } from "@redux/app/app.selectors";
import { UPDATE_CURRENT_MODAL } from "@redux/app/app.actions";

export function* getMobileWhatsNewModalSaga() {
  try {
    const { data }: Unpacked<typeof getMobileWhatsNewModalClient> = yield call(getMobileWhatsNewModalClient);

    if (data?.getMobileWhatsNewModal) {
      const preloadAssets = data.getMobileWhatsNewModal.items.map((item) => item.backgroundImage);
      yield call(FastImage.preload, preloadAssets);
      yield delay(1000);

      const activeModal: ReturnType<typeof getModalState> = yield select(getModalState);
      if (activeModal) {
        yield take(UPDATE_CURRENT_MODAL);
      }

      yield call(() =>
        Navigation.showModal({
          component: {
            id: MODALS.whatsNew,
            name: MODALS.whatsNew,
            passProps: data.getMobileWhatsNewModal,
          },
        })
      );
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getMobileWhatsNewModalSaga" });
    });
  }
}

export function* dismissWhatsNewModalSaga() {
  try {
    Navigation.dismissModal(MODALS.whatsNew);
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "dismissWhatsNewModalSaga" });
    });
  }
}
